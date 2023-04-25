import React from "react";
import "./LearnMorePart.css";
import { Button } from "react-bootstrap";

const LearnMorePart = () => {
  return (
    <div className="learn-more-section text-white text-center mt-3">
      <div className="p-5">
        <h4 className="mb-4">Create an Amazing Newspaper</h4>
        <p className="mb-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default LearnMorePart;
