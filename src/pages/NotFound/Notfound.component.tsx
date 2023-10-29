import React from 'react';
import { StyledNotFound } from './NotFound.styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import text from 'contents/text.json';

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
      <h1 className='error-title'>{text.pageNotFoundTitle}</h1>
      <p className='error-message'>{text.pageNotFoundMessage}</p>
      <Button
        onClick={() => navigate('/')}
        className='error-btn'
      >
        {text.goBackToHomePage}
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;
