import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center page_404">
      <div className="four_zero_four_bg">
        <h1 className="text-center ">404</h1>
      </div>

      <div className="contant_box_404">
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <Link to="/" className="link_404">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
