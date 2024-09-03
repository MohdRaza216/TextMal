// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';


function NavScrollExample({title="Set title here", aboutText="Set About here", mode, mode2, toggleMode, toggleMode2}) {
  return (
    <Navbar expand="lg" className={[`bg-${mode} navbar-${mode}`, `bg-${mode2} navbar-${mode2}`]}>
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">{aboutText}</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form  className='mx-3'>
            <Form.Check
              type="switch"
              label="Enable GreenMode"
              onClick={toggleMode2}
            />
          </Form>
          <Form className='mx-3'>
            <Form.Check
              type="switch"
              label="Enable DarkMode"
              onClick={toggleMode}
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
