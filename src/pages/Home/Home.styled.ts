import styled from 'styled-components';

export const StyledHome = styled.section`
  @media ${({ theme }) => theme.media.laptopM} {
    display: flex;
  }

  & .container-home {
    @media ${({ theme }) => theme.media.laptopM} {
      width: 100%;
      padding-left: 20%;
    }
  }

  & .hero-container {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${({ theme }) => theme.media.laptopM} {
      padding-top: 5rem;
    }
  }

  .hero-title,
  .hero-desc {
    text-align: center;
  }

  & .hero-title {
    font-size: 3.2rem;
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.media.laptopM} {
      font-size: 4rem;
    }
  }

  & .hero-desc {
    font-size: 1.8rem;
    @media ${({ theme }) => theme.media.laptopL} {
      margin: auto;
      max-width: 900px;
    }
  }

  & .hero-img {
    width: 50rem;
    border-radius: 50%;
  }

  & .card-gallery {
    padding-bottom: 9rem;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
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
  }

  & .card-wrapper {
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
`;
