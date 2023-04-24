import React from "react";
import { Outlet } from "react-router-dom";
import MyNavigationBar from "../pages/Shared/MyNavigationBar/MyNavigationBar";

const LoginRegLayout = () => {
  return (
    <div>
      <MyNavigationBar></MyNavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginRegLayout;
