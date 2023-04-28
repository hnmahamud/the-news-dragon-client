import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import MyNavigationBar from "../pages/Shared/MyNavigationBar/MyNavigationBar";
import { AuthContext } from "../providers/AuthProviders";
import { Spinner } from "react-bootstrap";

const LoginRegLayout = () => {
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
    <>
      <MyNavigationBar></MyNavigationBar>
      <Outlet></Outlet>
    </>
  );
};

export default LoginRegLayout;
