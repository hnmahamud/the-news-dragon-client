import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center my-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="text-secondary">Journalism Without Fear or Favour</p>
      <p className="text-secondary">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
