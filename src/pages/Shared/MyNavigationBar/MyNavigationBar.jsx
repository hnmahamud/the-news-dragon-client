import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const MyNavigationBar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  return (
    <Navbar
      className="my-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={
                location.pathname === "/category/8"
                  ? "text-dark"
                  : "text-secondary"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={
                location.pathname === "/about" ? "text-dark" : "text-secondary"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/career"
              className={
                location.pathname === "/career" ? "text-dark" : "text-secondary"
              }
            >
              Career
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              {user && (
                <Nav.Link as={NavLink} to="/profile">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link as={NavLink}>
                  <Button variant="secondary">Logout</Button>
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavigationBar;
