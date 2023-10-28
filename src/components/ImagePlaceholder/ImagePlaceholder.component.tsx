import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import CSS for the blur effect

interface ImagePlaceholderProps {
  imgSrc: string;
  className?: string;
  placeholderSrc?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  imgSrc,
  className,
  placeholderSrc,
}) => {
  return (
    <LazyLoadImage
      alt='Loading...'
      placeholderSrc={placeholderSrc ? placeholderSrc : 'https://placekitten.com/640/360'} // placeholder image
      src={imgSrc}
      effect='blur' // Add a blur effect to the placeholder
      wrapperClassName={className}
    />
  );
};

export default ImagePlaceholder;
