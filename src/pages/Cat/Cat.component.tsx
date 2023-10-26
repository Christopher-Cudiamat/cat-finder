import React from 'react';
import { useNavigate, createSearchParams, useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { StlyledCat } from './Cat.styled';
import Button from 'react-bootstrap/Button';
import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder.component';
import StarRating from 'components/StarRating/StarRating.component';

interface IRatings {
  label: string;
  count: number;
}

const Cat: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: { url, breeds },
  } = useFetch(`https://api.thecatapi.com/v1/images/${id}`);
  const cat = breeds?.[0];
  const ratings = [
    { label: 'Adaptability', count: cat?.adaptability },
    { label: 'Intelligence', count: cat?.intelligence },
    { label: 'Friendliness', count: cat?.stranger_friendly },
    { label: 'Affection', count: cat?.affection_level },
    { label: 'Grooming', count: cat?.grooming },
    { label: 'Energy', count: cat?.energy_level },
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
          <ImagePlaceholder
            imgSrc={url}
            className='cat-img-wrapper'
          />
        </div>
        {cat && (
          <div className='cat-details-wrapper'>
            <div className='cat-divider' />
            <div className='cat-details'>
              <h1 className='cat-name'>{cat.name}</h1>
              <h2 className='cat-origin'>Origin: {cat.origin}</h2>
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
          BACK
        </Button>
      </StlyledCat>
    </React.Fragment>
  );
};

export default Cat;
