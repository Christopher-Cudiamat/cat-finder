import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { StyledCard } from './Card.styled';
import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder.component';

interface ICardProps {
  imgSrc: string;
  id: string;
}

const Card: React.FC<ICardProps> = ({ imgSrc, id }) => {
  return (
    <StyledCard>
      <ImagePlaceholder
        imgSrc={imgSrc}
        placeholderSrc={'/images/card-placeholder.webp'}
      />
      <div className='card__btn--wrapper'>
        <Link to={`/cat/${id}`}>
          <Button variant='outline-primary'>View details</Button>
        </Link>
      </div>
    </StyledCard>
  );
};

export default Card;
