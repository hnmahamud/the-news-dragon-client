import React from "react";
import { Card } from "react-bootstrap";
import sportsZone1 from "../../../assets/1.png";
import sportsZone2 from "../../../assets/2.png";
import sportsZone3 from "../../../assets/3.png";
import { FaCalendarAlt } from "react-icons/fa";

const SportsZone = () => {
  return (
    <div className="d-flex flex-column">
      <Card className="mb-2">
        <Card.Img variant="top" src={sportsZone1} />
        <Card.Body>
          <Card.Title>
            21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Title>
          <Card.Text className="text-secondary d-flex align-items-center">
            <span>Sports</span>
            <span className="d-flex align-items-center ms-3">
              <FaCalendarAlt></FaCalendarAlt>
              <span className="ms-2">Jan 4, 2022</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-2">
        <Card.Img variant="top" src={sportsZone2} />
        <Card.Body>
          <Card.Title>
            21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Title>
          <Card.Text className="text-secondary d-flex align-items-center">
            <span>Sports</span>
            <span className="d-flex align-items-center ms-3">
              <FaCalendarAlt></FaCalendarAlt>
              <span className="ms-2">Jan 4, 2022</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-2">
        <Card.Img variant="top" src={sportsZone3} />
        <Card.Body>
          <Card.Title>
            21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Title>
          <Card.Text className="text-secondary d-flex align-items-center">
            <span>Sports</span>
            <span className="d-flex align-items-center ms-3">
              <FaCalendarAlt></FaCalendarAlt>
              <span className="ms-2">Jan 4, 2022</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SportsZone;
