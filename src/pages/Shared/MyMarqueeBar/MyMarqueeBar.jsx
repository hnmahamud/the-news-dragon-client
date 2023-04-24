import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const MyMarqueeBar = () => {
  return (
    <div className="d-flex my-4">
      <Button variant="danger">Latest</Button>
      <Marquee className="text-danger" speed={75}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default MyMarqueeBar;
