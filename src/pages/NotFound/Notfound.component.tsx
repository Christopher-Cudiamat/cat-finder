import React from 'react';
import { StyledNotFound } from './NotFound.styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import text from 'contents/text.json';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <div className='hero'>
        <div className='hero__overlay' />
        <img
          src='/images/error-cat.webp'
          alt='Sad cat'
          className='hero__img'
        />
      </div>
      <h1 className='title'>{text.pageNotFoundTitle}</h1>
      <p className='message'>{text.pageNotFoundMessage}</p>
      <Button
        onClick={() => navigate('/')}
        className='btn'
      >
        {text.goToHomePage}
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;
