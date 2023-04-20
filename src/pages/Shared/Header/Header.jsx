import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="text-center my-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>

      <div className="d-flex my-4">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={75}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

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
                  location.pathname === "/" ? "text-dark" : "text-secondary"
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/"
                className={
                  location.pathname === "/about"
                    ? "text-dark"
                    : "text-secondary"
                }
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/"
                className={
                  location.pathname === "/career"
                    ? "text-dark"
                    : "text-secondary"
                }
              >
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="d-flex align-items-center">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#login">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
