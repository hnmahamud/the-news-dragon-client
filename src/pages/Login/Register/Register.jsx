import React, { useContext, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { FaExclamationCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast } from "react-toastify";

const Register = () => {
  // Context API
  const { loading, setLoading, createUser, profileUpdate, verificationEmail } =
    useContext(AuthContext);

  // Use location and navigate for get the pathname where user wanted to go.
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  // State
  const [err, setErr] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [acceptCondition, setAcceptCondition] = useState(false);

  // Email Validation with Regex
  // uncontrolled component => controlled component
  const emailValidation = (event) => {
    const email = event.target.value;

    if (email.length > 0) {
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        setErr("Please provide a valid email");
        return;
      } else {
        setErr("");
        return;
      }
    } else {
      setErr("");
      return;
    }
  };

  // Password Validation with Regex
  // uncontrolled component => controlled component
  const passwordValidation = (event) => {
    const password = event.target.value;

    if (password.length > 0) {
      if (password.length < 6) {
        setErr("Your password should be at least 6 character long.");
        return;
      } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        setErr("Your password should be at least one special character.");
        return;
      } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(password)) {
        setErr(
          "Your password should be at least one upper and lower case letter."
        );
        return;
      } else if (!/(?=.*\d)/.test(password)) {
        setErr("Your password should be at least one digit.");
        return;
      } else {
        setErr("");
        return;
      }
    } else {
      setErr("");
      return;
    }
  };

  // Registration with email password
  const submitRegHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Create user
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        toast("Successfully registered!", {
          position: toast.POSITION.TOP_CENTER,
        });

        // Navigate to user target path
        navigate(from, { replace: true });

        setErr("");
        event.target.reset();

        // Update user profile
        profileUpdate(name, photoUrl)
          .then(() => {
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });

        // Send verification email
        verificationEmail().then(() => {
          console.log("Verification email sent");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errForMsg = errorMessage.split(":");
        setErr(errForMsg[1]);
        console.log(`Error Message: ${errorMessage}`);
        setLoading(false);
      });
  };

  const handleTermsAndCondition = (event) => {
    setAcceptCondition(event.target.checked);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-4">
      <Form
        onSubmit={submitRegHandler}
        style={{ width: "30%" }}
        className="rounded-1 shadow p-4"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <h3 className="text-center">Create an account</h3>
          <p className="text-danger mb-5">
            {err && <FaExclamationCircle></FaExclamationCircle>} {err}
          </p>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={emailValidation}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="d-flex justify-content-center align-items-center">
            <Form.Control
              onChange={passwordValidation}
              className="me-2"
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
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
            onChange={handleTermsAndCondition}
            className="me-2"
            type="checkbox"
            required
          />
          <Form.Label className="text-secondary">
            I accept the
            <Link className="text-decoration-none"> Terms and Conditions</Link>
          </Form.Label>
        </Form.Group>

        {loading ? (
          <Button className="w-100 mb-3" variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <Button
            disabled={!acceptCondition}
            className="w-100 mb-3"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        )}

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
