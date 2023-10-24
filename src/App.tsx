import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const App: React.FC = () => {

  const StyledWrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <div className='App'>
      <StyledWrapper>
        <Button>INITIAL SET-UP</Button>
      </StyledWrapper>
    </div>
  );
}

export default App;
