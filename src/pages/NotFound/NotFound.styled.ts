import styled from 'styled-components';

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  color: ${({ theme }) => theme.color.blackLight};

  & .hero {
    position: relative;
    @media ${({ theme }) => theme.media.tablet} {
      max-width: 500px;
    }

    &__overlay {
      border-radius: 1rem;
      background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
      position: absolute;
      inset: 0;
      opacity: 0.5;
    }

    &__img {
      height: 100%;
      widht: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  & .title {
    font-size: 2.5rem;
    margin: 2rem 0 1rem 0;
    text-align: center;

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 4rem;
      padding-top: 4rem;
    }
  }

  & .message {
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 70rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  & .btn {
    padding: 1rem 2rem;
    font-size: 1.6rem;
  }
`;
