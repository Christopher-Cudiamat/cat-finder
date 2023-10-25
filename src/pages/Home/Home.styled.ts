import styled from 'styled-components';

export const StyledHome = styled.section`
  & .hero-container {
    position: relative;
    padding: 2rem;
  }

  .hero-title,
  .hero-desc {
    text-align: center;
  }

  & .hero-title {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  & .hero-desc {
    font-size: 1.6rem;
  }

  & .hero-img {
    border-radius: 50%;
  }

  & .card-gallery {
    padding-bottom: 15rem;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: auto;
  }

  & .card-wrapper {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
