import styled from 'styled-components';

export const StlyledCat = styled.section`
  @media ${({ theme }) => theme.media.laptopM} {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200rem;
    margin: auto;
    height: 100vh;
  }

  & .btn-back {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 1.4rem;
    padding: 0.5rem 1.5rem;
    letter-spacing: 0.1rem;

    @media ${({ theme }) => theme.media.laptopM} {
      font-size: 1.6rem;
    }
  }

  & .cat-img-wrapper {
    width: 100%;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 22px 44px 0px;

    @media ${({ theme }) => theme.media.laptopM} {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 22px 54px 0px;
    }

    & > span {
      height: 30rem;
      position: relative;

      @media ${({ theme }) => theme.media.tablet} {
        height: 50rem;
      }

      @media ${({ theme }) => theme.media.laptopM} {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      @media ${({ theme }) => theme.media.laptopL} {
        height: 70rem;
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  & .cat-details-wrapper {
    padding: 2rem 2rem 3rem 1rem;
    display: flex;
    width: 100%;

    @media ${({ theme }) => theme.media.laptopM} {
      padding-left: 4rem;
    }

    & .cat-divider {
      margin-right: 1rem;
      background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
      height: auto;
      width: 1.5rem;

      @media ${({ theme }) => theme.media.laptopM} {
        margin-right: 2rem;
        width: 0.7rem;
      }
    }

    & .cat-details {
      padding: 1rem 0;

      h1,
      h2,
      h3 {
        font-weight: 500;
      }

      .cat-name {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
      }

      cat-origin,
      cat-temperament {
        font-size: 1.8rem;
      }

      .cat-temperament,
      .cat-description {
        @media ${({ theme }) => theme.media.laptopM} {
          max-width: 50rem;
        }

        @media ${({ theme }) => theme.media.laptopL} {
          max-width: 70rem;
        }
      }

      .cat-temperament {
        margin-bottom: 2rem;
      }

      p {
        font-size: 1.6rem;
        margin-bottom: 0;
        font-weight: 400;
      }

      & .cat-description {
        margin-bottom: 2rem;
      }

      & .cat-ratings-wrapper {
        display: flex;
        align-items: center;

        & .cat-ratings-label {
          margin-right: 0.3rem;
        }

        & .cat-ratings-count {
          margin-top: 0.7rem;
        }
      }
    }
  }
`;
