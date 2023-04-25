import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form style={{ width: "30%" }} className="rounded-1 shadow p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 className="text-center mb-5">Sign in to your account</h3>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="d-flex justify-content-center align-items-center">
            <Form.Control
              className="me-2"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <div onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? (
                <FaEye style={{ fontSize: "1.4rem" }}></FaEye>
              ) : (
                <FaEyeSlash style={{ fontSize: "1.4rem" }}></FaEyeSlash>
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button className="w-100 mb-3" variant="primary" type="submit">
          Login
        </Button>

        <div className="d-flex flex-column mb-3">
          <p className="text-center text-secondary">Or</p>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login with google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub></FaGithub> Login with github
          </Button>
        </div>

        <div className="text-secondary ">
          Don’t have an account yet?{" "}
          <Link to="/register" className="text-decoration-none">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
