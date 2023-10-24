import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { StyledHeader } from './Header.styled';

import React from 'react';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container fluid>
        <Row className='d-flex justify-content-between'>
          <Col>
            <Navbar.Brand
              href='#home'
              className=''
            >
              CAT FINDER
            </Navbar.Brand>
          </Col>
          <Col>
            <p>Likes</p>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
