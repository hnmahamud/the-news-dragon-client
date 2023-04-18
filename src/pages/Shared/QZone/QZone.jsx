import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import "./QZone.css";

const QZone = () => {
  return (
    <div className="q-zone text-center pb-4">
      <h4 className="text-start font-weight-bold p-4">Q-Zone</h4>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
    </div>
  );
};

export default QZone;
