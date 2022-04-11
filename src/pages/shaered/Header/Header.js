import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo.png';
import Customlink from "../../Customlink/Customlink";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <>
      <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand>
              <img className="w-50 img-fluid" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Customlink className='iteam' to="/">Home</Customlink>
                <Customlink className='iteam' to="/about">About</Customlink>
                <Customlink className='iteam' to="/login">Log In</Customlink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </nav>
  );
};

export default Header;
