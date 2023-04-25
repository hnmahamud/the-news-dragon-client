import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [acceptCondition, setAcceptCondition] = useState(false);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form style={{ width: "30%" }} className="rounded-1 shadow p-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <h3 className="text-center mb-5">Create an account</h3>
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <Form.Group className="d-flex mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setAcceptCondition(!acceptCondition)}
            className="me-2"
            type="checkbox"
          />
          <Form.Label className="text-secondary">
            I accept the
            <Link className="text-decoration-none"> Terms and Conditions</Link>
          </Form.Label>
        </Form.Group>

        <Button
          disabled={!acceptCondition}
          className="w-100 mb-3"
          variant="primary"
          type="submit"
        >
          Register
        </Button>

        <div className="text-secondary ">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login here
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
