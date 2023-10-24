import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledForm = styled(Form)`
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  border-width: 4px;
  border-style: solid;
  border-radius: 1rem;
  color: white;
  padding: 2rem;
  margin: auto;
  margin-top: 2rem;
  width: 90%;
  font-size: 1.8rem;

  & select,
  & button {
    font-size: 1.6rem;
    height: 4rem;
  }

  & select {
    margin-bottom: 2rem;
  }

  & button {
    width: 100%;
  }
`;
