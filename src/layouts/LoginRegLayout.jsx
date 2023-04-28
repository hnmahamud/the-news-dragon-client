import React from "react";
import { Outlet } from "react-router-dom";
import MyNavigationBar from "../pages/Shared/MyNavigationBar/MyNavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegLayout = () => {
  return (
    <>
      <MyNavigationBar></MyNavigationBar>
      <Outlet></Outlet>
      <ToastContainer />
    </>
  );
};

export default LoginRegLayout;
