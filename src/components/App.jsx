import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const App = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
    
      </Container>
    </Navbar>
  );
};
