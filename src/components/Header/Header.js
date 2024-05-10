import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  // Use a function to handle repetitive tasks like rendering Nav.Link
  const renderNavLink = (href, text) => (
    <Nav.Link href={href} className="nav-link">{text}</Nav.Link>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">Turbo Charge</Navbar.Brand> {/* Changed href to root */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            {renderNavLink('/home', 'Home')}
            {renderNavLink('/services', 'Services')}
            {renderNavLink('/about', 'About')}
            {renderNavLink('/contact', 'Contact')}
          </Nav>
          <Nav className="ml-auto mb-2 mb-lg-0">
            <SocialIcon url="https://www.facebook.com" className="social-icon mr-2" />
            <SocialIcon url="https://www.instagram.com" className="social-icon mr-2" />
            {renderNavLink('/RegisterPage', 'Register')}
            {renderNavLink('/SignIn', 'Sign In')}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
