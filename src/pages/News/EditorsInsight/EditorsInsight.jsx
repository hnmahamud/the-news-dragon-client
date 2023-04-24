import React from "react";
import editorsInsight1 from "../../../assets/editorsInsight1.png";
import editorsInsight2 from "../../../assets/editorsInsight2.png";
import editorsInsight3 from "../../../assets/editorsInsight3.png";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

const EditorsInsight = () => {
  return (
    <div>
      <h3>Editors Insight</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={editorsInsight1} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <div className="text-secondary d-flex align-items-center">
                  <FaCalendarAlt></FaCalendarAlt>
                  <span className="ms-2">Jan 4, 2022</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={editorsInsight2} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <div className="text-secondary d-flex align-items-center">
                  <FaCalendarAlt></FaCalendarAlt>
                  <span className="ms-2">Jan 4, 2022</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={editorsInsight3} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <div className="text-secondary d-flex align-items-center">
                  <FaCalendarAlt></FaCalendarAlt>
                  <span className="ms-2">Jan 4, 2022</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsight;
