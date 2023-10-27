import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

export const StyledLoader = styled(Spinner)`
  width: 5rem;
  height: 5rem;
  transform-origin: center;
  position: relative;
  border: 3rem dash;

  @media ${({ theme }) => theme.media.laptop} {
    width: 8rem;
    height: 8rem;
  }
`;

export const StyledLoaderBackground = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.color.white};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
