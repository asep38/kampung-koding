import Link from "next/link";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bayangan">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Kampung Koding
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/belajar">Belajar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
