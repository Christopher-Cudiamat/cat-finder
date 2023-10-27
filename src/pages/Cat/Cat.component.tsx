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
        <div className='cat-img-wrapper'>
          <img
            src={url}
            className={url}
          />
        </div>
        {cat && (
          <div className='cat-details-wrapper'>
            <div className='cat-divider' />
            <div className='cat-details'>
              <h1 className='cat-name'>{cat.name}</h1>
              <h2 className='cat-origin'>
                {text.origin}: {cat.origin}
              </h2>
              <h3 className='cat-temperament'>{cat.temperament}</h3>
              <p className='cat-description'>{cat.description}</p>
              {ratings.map((rating: IRatings) => (
                <div
                  key={rating.label}
                  className='cat-ratings-wrapper'
                >
                  <p className='cat-ratings-label'>{rating.label}: </p>
                  <StarRating
                    size={'24px'}
                    rate={rating.count}
                    className='cat-ratings-count'
                  />
                </div>
              ))}
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
