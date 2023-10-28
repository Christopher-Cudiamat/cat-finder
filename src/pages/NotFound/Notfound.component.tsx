import React from 'react';
import { StyledNotFound } from './NotFound.styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <div className='error-img-wrapper'>
        <div className='error-img-overlay' />
        <img
          src='/images/error-cat.webp'
          alt='Sad cat'
          className='error-img'
        />
      </div>
      <h1 className='error-title'>404 - Page Not Found</h1>
      <p className='error-message'>Sorry, the page you are looking for does not exist.</p>
      <Button
        onClick={() => navigate('/')}
        className='error-btn'
      >
        Go to home page
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;
