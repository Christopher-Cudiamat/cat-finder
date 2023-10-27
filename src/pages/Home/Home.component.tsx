import React, { useEffect, useState } from 'react';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { useSearchParams } from 'react-router-dom';
import { TPartialBreed } from 'types/bereed';
import { StyledHome } from './Home.styled';
import FormFilter from 'components/FormFilter/FormFilter.component';
import Card from 'components/Card/Card.component';

interface ICat {
  breeds: TPartialBreed[];
  height: number;
  id: string;
  url: string;
  width: string;
}

const Home: React.FC = () => {
  const { globalState, setGlobalState } = useGlobalContext();
  const [cats, setCats] = useState<ICat[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const url = `${process.env.REACT_APP_BASE_URL}images/search?page=${globalState?.page}&limit=10&has_breeds=1&breed_ids=${globalState?.breedId}`;
  const abortController = new AbortController();
  const [searchParams] = useSearchParams();
  const breedIdParam = searchParams.get('breed');

  useEffect(() => {
    if (breedIdParam) {
      setGlobalState({ ...globalState, breedId: breedIdParam });
    }
  }, [breedIdParam]);

  useEffect(() => {
    if (!globalState?.breedId || globalState?.breedId === undefined) {
      if (cats) setCats(null);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': `${process.env.REACT_APP_API_KEY}`,
          },
        });

        if (!response.ok) throw new Error();

        const data = await response.json();
        const headersObj = Object.fromEntries([...response.headers.entries()]);
        setPageCount(Number(headersObj['pagination-count']));

        if (!cats) {
          setCats(data);
          return;
        }

        const resetCatsArr = cats.filter(
          (item: ICat) => item.breeds[0].id === globalState?.breedId
        );
        const filteredCatsArr = data.filter(
          (item1: ICat) => !cats.some((item2: ICat) => item1.id === item2.id)
        );
        setCats([...resetCatsArr, ...filteredCatsArr]);
      } catch (error) {
        setGlobalState({ ...globalState, error: true });
      }
    };

    fetchData();
    return () => abortController?.abort();
  }, [url]);

  return (
    <StyledHome>
      <FormFilter hideButton={cats && pageCount === cats.length} />
      <div className='container-home'>
        {!cats ? (
          <div className='hero-container'>
            <h1 className='hero-title'>Find the cat for you.</h1>
            <p className='hero-desc'>
              Owning a cat can be an extremely rewarding relationship. A cat has the ability to both
              calm your nervous system and provide an immediate outlet for fun and play. Although
              cats are independent animals who like to scavenge and explore on their own terms, they
              are also very affectionate with their owners and people they trust.
            </p>
            <img
              src='/images/home-hero.jpg'
              className='hero-img'
            />
          </div>
        ) : (
          <React.Fragment>
            <ul className='card-gallery'>
              {cats.map((cat: ICat) => (
                <li
                  key={cat.id}
                  className='card-wrapper'
                >
                  <Card
                    id={cat.id}
                    imgSrc={cat.url}
                  />
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
      <div id='bottom' />
    </StyledHome>
  );
};

export default Home;
