import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";

function HeaderCopy() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/"><img src='logo.jpg'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
          <Nav className="">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Work" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="/resume">Resume</NavDropdown.Item> */}
              <NavDropdown.Item href="/theaterwork">
                Theatre Work
              </NavDropdown.Item>
              <NavDropdown.Item href="/filmwork">Film Work</NavDropdown.Item>
              <NavDropdown.Item href="/teaching">Teaching</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/connect">Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderCopy;