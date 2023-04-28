import React, { useContext } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Header from "../pages/Shared/Header/Header";
import { AuthContext } from "../providers/AuthProviders";

const NewsLayout = () => {
  // Context API
  const { fullLoading } = useContext(AuthContext);

  // Loading when page is reload
  if (fullLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

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
    </Container>
  );
};

export default NewsLayout;
