import React, { useEffect, useState } from 'react';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { useSearchParams } from 'react-router-dom';
import { TPartialBreed } from 'types/bereed';
import { StyledHome } from './Home.styled';
import FormFilter from 'components/FormFilter/FormFilter.component';
import Card from 'components/Card/Card.component';
import text from 'contents/text.json';

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
  const [searchParams] = useSearchParams();
  const breedIdParam = searchParams.get('breed');

  useEffect(() => {
    if (breedIdParam) {
      setGlobalState({ ...globalState, breedId: breedIdParam });
    }
  }, [breedIdParam]);

  useEffect(() => {
    if (!globalState?.breedId) {
      if (cats) setCats(null);
      return;
    }

    const fetchData = async () => {
      try {
        setGlobalState({ ...globalState, loading: true });
        const response = await fetch(url, {
          headers: {
            'x-api-key': `${process.env.REACT_APP_API_KEY}`,
          },
        });

        if (!response.ok) throw new Error();

        const data = await response.json();
        const headersObj = Object.fromEntries([...response.headers.entries()]);
        setPageCount(Number(headersObj['pagination-count']));
        setGlobalState({ ...globalState, loading: false });

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
        setGlobalState({ ...globalState, error: true, loading: false });
      }
    };

    fetchData();
  }, [url]);

  return (
    <StyledHome>
      <FormFilter allDataIsLoaded={cats && pageCount === cats.length} />
      <div className='wrapper'>
        {!cats ? (
          <div className='hero'>
            <h1 className='hero__title'>{text.title}</h1>
            <p className='hero__message'>{text.welcomeMessage}</p>
            <img
              src='/images/home-hero.webp'
              className='hero__img'
            />
          </div>
        ) : (
          <ul className='cards'>
            {cats.map((cat: ICat) => (
              <li
                key={cat.id}
                className='cards__list'
              >
                <Card
                  id={cat.id}
                  imgSrc={cat.url}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id='bottom-observer' />
    </StyledHome>
  );
};

export default Home;
