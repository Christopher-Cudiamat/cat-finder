import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';
import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder.component';

interface ICardProps {
  imgSrc: string;
  id: string;
}

const Card: React.FC<ICardProps> = ({ imgSrc, id }) => {
  return (
    <StyledCard>
      <ImagePlaceholder imgSrc={imgSrc} />
      <div className='btn-wrapper'>
        <Link to={`/cat/${id}`}>View details</Link>
      </div>
    </StyledCard>
  );
};

export default Card;
