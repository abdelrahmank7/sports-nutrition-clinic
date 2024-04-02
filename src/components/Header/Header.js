import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/package-lock.json">Turbo Charge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <SocialIcon url="https://www.facebook.com" className="social-icon" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://www.instagram.com" className="social-icon" style={{ height: 40, width: 40 }} />
            <Nav.Link href="/RegisterPage">Register</Nav.Link>
            <Nav.Link href="/SignIn">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
