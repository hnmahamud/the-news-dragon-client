import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div className="my-4">
      <div className="d-flex flex-column mb-4">
        <h4 className="font-weight-bold">Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with github
        </Button>
      </div>

      <div className="my-4">
        <h4 className="font-weight-bold">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
