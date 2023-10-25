import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100%;
  min-height: 4rem;
  overflow: hidden;
  border-radius: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & span {
    width: 100%;
    height: 30rem;
    
    & img {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .btn-wrapper {
    padding: 2rem 1rem;

    & > a {
      font-size: 1.6rem;
      font-weight: 500;
      text-decoration: none;
      padding: 1rem 2rem;
      color: ${({theme}) => theme.color.black};
      background: ${({theme}) => theme.color.primary};
      border-radius: 1rem;
    }
  }
`;
