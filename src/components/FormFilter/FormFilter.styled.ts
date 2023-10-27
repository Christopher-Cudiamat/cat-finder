import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledForm = styled(Form)`
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  color: white;
  padding: 2rem;
  margin: auto;
  width: 100%;

  @media ${({ theme }) => theme.media.laptopM} {
    position: fixed;
    width: 20%;
    height: 100vh;
    padding-top: 4rem;
  }

  & label {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  & select,
  & button {
    font-size: 1.6rem;
    font-weight: 500;
    height: 5rem;
  }

  & select {
    margin-bottom: 2rem;
  }
`;

export const StyledFormFooter = styled.div<{ hideFormFooter?: boolean }>`
  z-index: 100;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: ${(props) => (props.hideFormFooter ? '-20rem' : '0')};
  transition: bottom 0.5s;

  @media ${({ theme }) => theme.media.laptopM} {
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0;
  }

  & button {
    width: 100%;
    border-radius: 0;
  }
`;
