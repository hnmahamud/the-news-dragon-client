import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Container>
        <Row>
          <Col className="my-4" lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default NewsLayout;
