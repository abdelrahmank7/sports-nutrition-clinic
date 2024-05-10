import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/package-lock.json">Turbo Charge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-icon" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
          <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
            <SocialIcon url="https://www.facebook.com" className="social-icon mr-2" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://www.instagram.com" className="social-icon mr-2" style={{ height: 40, width: 40 }} />
            <Nav.Link href="/RegisterPage" className="nav-link">Register</Nav.Link>
            <Nav.Link href="/SignIn" className="nav-link">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;