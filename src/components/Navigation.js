import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navigation = () => {

  const cartProducts = useSelector(state => state.cart);

  return (
    <div className="navbar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LoGO</Navbar.Brand>
            <Nav>
              <Nav.Link to="/" as={Link}>List</Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation