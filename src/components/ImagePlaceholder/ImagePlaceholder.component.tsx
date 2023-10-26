import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import CSS for the blur effect

interface ImagePlaceholderProps {
  imgSrc: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ imgSrc, className }) => {
  return (
    <LazyLoadImage
      alt='Loading...'
      placeholderSrc='https://placehold.co/600x400' // placeholder image
      src={imgSrc}
      effect='blur' // Add a blur effect to the placeholder
      wrapperClassName={className}
    />
  );
};

export default ImagePlaceholder;
