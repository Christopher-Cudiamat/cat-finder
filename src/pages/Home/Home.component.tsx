/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { IBreed, useGlobalContext } from 'hooks/useGlobalContext';
import { StyledHome } from './Home.styled';
import FormFilter from 'components/FormFilter/FormFilter.component';
import Card from 'components/Card/Card.component'
import { useSearchParams } from 'react-router-dom'

interface ICats {
  breeds: any;
  height: number;
  id: string;
  url: string;
  width: string;
}

const Home: React.FC = () => {
  const {
    globalState: { page, breedId },
    setGlobalState
  } = useGlobalContext();
  const [cats, setCats] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const abortController = new AbortController();
  const url = `${process.env.REACT_APP_BASE_URL}images/search?page=${page}&limit=10&has_breeds=1&breed_ids=${breedId}`;
  const [searchParams] = useSearchParams();
  const breedIdParam = searchParams.get('breed')

  useEffect(() => {
    if(breedIdParam) {
      setGlobalState((prevState: IBreed) => {
        return { ...prevState, breedId: breedIdParam };
      })
    }
  },[breedIdParam]);

  useEffect(() => {
    if (!breedId || breedId === undefined) {
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

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const headersObj = Object.fromEntries([...response.headers.entries()]);
        setPageCount(Number(headersObj['pagination-count']));

        if (!cats) {
          setCats(data);
          return;
        }

        const resetCatsArr = cats.filter((item: any) => item.breeds[0].id === breedId);
        const filteredCatsArr = data.filter(
          (item1: any) => !cats.some((item2: any) => item1.id === item2.id)
        );
        setCats([...resetCatsArr, ...filteredCatsArr]);

        return () => {
          abortController.abort(); // Cancel the request if component unmounts
        };
      } catch (error) {
        if (error) {
          console.log('Request was aborted.', error);
        }
      }
    };

    fetchData();

    return () => {};
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
              calm your nervous system and provide an immediate outlet for fun and play. Although cats
              are independent animals who like to scavenge and explore on their own terms, they are
              also very affectionate with their owners and people they trust.
            </p>
            <img
              src='/images/home-hero.jpg'
              className='hero-img'
            />
          </div>
        ) : (
          <ul className='card-gallery'>
            {cats.map((cat: ICats) => (
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
        )}
      </div>
      <div id='bottom' />
    </StyledHome>
  );
};

export default Home;
