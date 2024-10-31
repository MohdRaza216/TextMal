import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';

function NavScrollExample({ title = "Set title here", aboutText = "Set About here", mode, mode2, toggleMode, toggleMode2 }) {
  
  // Conditional classes based on mode and mode2
  const navbarClass = mode2 === "dark" ? `bg-success navbar-success` 
                    : mode === "dark" ? `bg-dark navbar-dark` 
                    : `bg-light navbar-light`;

  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">{aboutText}</Nav.Link>
          </Nav>
          
          <Form className='mx-3'>
            <Form.Check
              type="switch"
              label="Enable GreenMode"
              onClick={toggleMode2}
              checked={mode2 === "dark"}
              disabled={mode === "dark"} // Disable GreenMode switch if DarkMode is active
            />
          </Form>
          <Form className='mx-3'>
            <Form.Check
              type="switch"
              label="Enable DarkMode"
              onClick={toggleMode}
              checked={mode === "dark" && mode2 === "light"}
              disabled={mode2 === "dark"} // Disable DarkMode switch if GreenMode is active
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Assigning PropTypes to the NavScrollExample component
NavScrollExample.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  mode2: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  toggleMode2: PropTypes.func.isRequired,
};

export default NavScrollExample;
