import React from "react";
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'

function MyNavbar({ onOpenModal }) {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" onClick={onOpenModal}>Modal</Button>
          </Form>
        </Container>
      </Navbar>
  )
}

export default MyNavbar;