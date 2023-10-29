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

  & .form-label {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    cursor: pointer;

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};
    }
  }

  & .form-select,
  & .form-btn {
    font-size: 1.6rem;
    font-weight: 500;
    height: 5rem;
    width: 100%;
  }

  & .form-select {
    margin-bottom: 2rem;
  }

  & .form-btn {
    border-radius: 0;

    @media ${({ theme }) => theme.media.laptopM} {
      border-radius: 1rem;
    }
  }
`;

export const StyledFormButtonWrapper = styled.div<{ $hide: boolean }>`
  z-index: 100;
  width: 100%;
  transition: bottom 0.5s;
  position: fixed;
  left: 0;
  bottom: ${(props) => (props?.$hide ? '-20rem' : '0')};

  @media ${({ theme }) => theme.media.laptopM} {
    bottom: 0;
    position: relative;
  }
`;
