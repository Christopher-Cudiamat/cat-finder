import React from 'react';
import { StyledLoader, StyledLoaderBackground } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <React.Fragment>
      <StyledLoaderBackground>
        <StyledLoader
          animation='border'
          role='status'
          variant='primary'
        >
          <span className='visually-hidden'>Loading...</span>
        </StyledLoader>
      </StyledLoaderBackground>
    </React.Fragment>
  );
};

export default Loader;
