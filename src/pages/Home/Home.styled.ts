import styled from 'styled-components';

export const StyledHome = styled.section`
  @media ${({ theme }) => theme.media.laptopM} {
    display: flex;
  }

  & .wrapper {
    @media ${({ theme }) => theme.media.laptopM} {
      width: 100%;
      padding-left: 20%;
    }
  }

  & .hero {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${({ theme }) => theme.media.laptopM} {
      padding-top: 5rem;
    }

    &__title,
    &__message {
      text-align: center;
    }

    &__title {
      font-size: 3.2rem;
      margin-bottom: 2rem;

      @media ${({ theme }) => theme.media.laptopM} {
        font-size: 4rem;
      }
    }

    &__message {
      font-size: 1.8rem;
      @media ${({ theme }) => theme.media.laptopL} {
        margin: auto;
        max-width: 900px;
      }
    }

    &__img {
      width: 50rem;
      border-radius: 50%;

      @media ${({ theme }) => theme.media.tablet} {
        width: 100rem;
      }

      @media ${({ theme }) => theme.media.laptop} {
        width: 50rem;
      }

      @media ${({ theme }) => theme.media.laptopL} {
        width: 80rem;
      }
    }
  }

  & .cards {
    padding: 5rem 2rem 9rem 2rem;
    margin: auto;

    @media ${({ theme }) => theme.media.tablet} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media ${({ theme }) => theme.media.laptopM} {
      justify-content: center;
      gap: 2.5rem;
    }

    &__list {
      width: 100%;
      min-width: 300px;
      margin-bottom: 2rem;

      @media ${({ theme }) => theme.media.tablet} {
        width: 49%;
      }

      @media ${({ theme }) => theme.media.laptop} {
        width: 30%;
      }
    }
  }
`;
