import React from 'react';
import { useNavigate, createSearchParams, useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { StlyledCat } from './Cat.styled';
import Button from 'react-bootstrap/Button';
import StarRating from 'components/StarRating/StarRating.component';
import text from 'contents/text.json';

interface IRatings {
  label: string;
  count: number;
}

const Cat: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: { url, breeds },
  } = useFetch(`images/${id}`);
  const cat = breeds?.[0];
  const ratings = [
    { label: text.adaptability, count: cat?.adaptability },
    { label: text.intelligence, count: cat?.intelligence },
    { label: text.friendliness, count: cat?.stranger_friendly },
    { label: text.affection, count: cat?.affection_level },
    { label: text.grooming, count: cat?.grooming },
    { label: text.energy, count: cat?.energy_level },
  ];

  const handleNavigateBack = () => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        breed: cat.id,
      }).toString(),
    });
  };

  return (
    <React.Fragment>
      <StlyledCat>
        <div className='img-wrapper'>
          <img
            src={url}
            className={url}
          />
        </div>
        {cat && (
          <div className='details'>
            <div className='details__divider' />
            <div className='details__wrapper'>
              <h1 className='details__name'>{cat.name}</h1>
              <h2 className='details__origin'>
                {text.origin}: {cat.origin}
              </h2>
              <h3 className='details__temperament'>{cat.temperament}</h3>
              <p className='details__description'>{cat.description}</p>
              <ul>
                {ratings.map((rating: IRatings) => (
                  <li
                    key={rating.label}
                    className='details__ratings'
                  >
                    <p className='details__ratings--label'>{rating.label}: </p>
                    <StarRating
                      size={'24px'}
                      rate={rating.count}
                      className='details__ratings--count'
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Button
          onClick={handleNavigateBack}
          className='btn-back'
        >
          {text.buttonBack}
        </Button>
      </StlyledCat>
    </React.Fragment>
  );
};

export default Cat;
