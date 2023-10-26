import React from 'react';

interface IStarRating {
  size: string;
  rate: number;

  className?: string;
}

const StarRating: React.FC<IStarRating> = ({ size, rate, className }) => {
  return (
    <div style={{ display: 'flex' }}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
        <div
          key={i}
          className={className}
        >
          <svg
            key={i}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
          >
            <path
              fill={i < rate ? 'gold' : 'gray'}
              d='M12 2l2.1 6.2h6.9l-5 3.7 1.9 6.2-5-3.8-5 3.8 1.9-6.2-5-3.7h6.9z'
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
