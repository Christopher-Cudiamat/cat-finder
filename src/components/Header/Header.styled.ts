import styled from 'styled-components';

export const Header = styled.header`
  padding: 4px;
  height: 60px;
  width: 100%;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);

  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
  }
`