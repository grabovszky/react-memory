import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar bg="dark" className="shadow">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/images/evista.png"
            width="110"
            height="38"
            className="d-inline-block align-top"
            alt="Evista logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  </header>
);

export default Header;
