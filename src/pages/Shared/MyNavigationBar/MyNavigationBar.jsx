import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const MyNavigationBar = () => {
  // Context API
  const { user, logout } = useContext(AuthContext);

  // Use location for active class
  const location = useLocation();

  // Logout handler
  const logoutHandler = () => {
    logout()
      .then(() => {
        toast("Logout Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  <Button onClick={logoutHandler} variant="secondary">
                    Logout
                  </Button>
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
