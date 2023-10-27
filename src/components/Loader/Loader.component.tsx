import React from 'react';
import { StyledLoader, StyledLoaderBackground } from './Loader.styled';
import { useGlobalContext } from 'hooks/useGlobalContext';

const Loader: React.FC = () => {
  const {
    globalState: { loading },
  } = useGlobalContext();

  return (
    <React.Fragment>
      {loading ? (
        <StyledLoaderBackground>
          <StyledLoader
            animation='border'
            role='status'
            variant='primary'
          >
            <span className='visually-hidden'>Loading...</span>
          </StyledLoader>
        </StyledLoaderBackground>
      ) : null}
    </React.Fragment>
  );
};

export default Loader;
