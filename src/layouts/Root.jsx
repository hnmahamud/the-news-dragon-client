import React, { useContext } from "react";
import Header from "../pages/Shared/Header/Header";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import MyNavigationBar from "../pages/Shared/MyNavigationBar/MyNavigationBar";
import MyMarqueeBar from "../pages/Shared/MyMarqueeBar/MyMarqueeBar";
import LearnMorePart from "../pages/Shared/LearnMorePart/LearnMorePart";
import { AuthContext } from "../providers/AuthProviders";

const Root = () => {
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
      <MyMarqueeBar></MyMarqueeBar>
      <MyNavigationBar></MyNavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col className="my-4" lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
            <LearnMorePart></LearnMorePart>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Root;
