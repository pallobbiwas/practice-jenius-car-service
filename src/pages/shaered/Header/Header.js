import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import Customlink from "../../Customlink/Customlink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
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
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Customlink className="iteam" to="/">
                  Home
                </Customlink>
                <Customlink className="iteam" to="#service">
                  Services
                </Customlink>
                <Customlink className="iteam" to="#experts">
                  Experts
                </Customlink>
                <Customlink className="iteam" to="/about">
                  About
                </Customlink>
              </Nav>
              {user ? <p>{user.email}</p> : ""}
              <Nav className="ms-auto my-2 my-lg-0">
                {user ? (
                  <button onClick={() => signOut(auth)}>Log out</button>
                ) : (
                  <Customlink className="iteam" to="/login">
                    Login
                  </Customlink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </nav>
  );
};

export default Header;
