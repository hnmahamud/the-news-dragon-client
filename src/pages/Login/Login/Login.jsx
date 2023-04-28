import React, { useContext, useRef, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast } from "react-toastify";

const Login = () => {
  // Context API
  const {
    loading,
    setLoading,
    loginUser,
    googleSignIn,
    githubSignIn,
    passwordReset,
  } = useContext(AuthContext);

  // State
  const [err, setErr] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // useRef
  const emailRef = useRef();

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

  // Login with email password
  const submitLoginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // Navigate to user target path
        // navigate(from, { replace: true });

        setErr("");
        event.target.reset();

        toast("Login Successfully!", {
          position: toast.POSITION.TOP_CENTER,
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

  // Forget password
  const forgetPassHandler = () => {
    const email = emailRef.current.value.trim();
    if (!email) {
      setErr("Please provide your email address.");
      return;
    }
    passwordReset(email)
      .then(() => {
        setErr("");
        toast("Password reset link sent to your email address.", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errForToast = errorMessage.split(":");
        setErr(errForToast[1]);
        console.log(`Error Message: ${errorMessage}`);
      });
  };

  // Login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        setErr("");

        toast("Login Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errForToast = errorMessage.split(":");
        setErr(errForToast[1]);
        console.log(`Error Message: ${errorMessage}`);
      });
  };

  // Login with github
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        setErr("");

        toast("Login Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errForToast = errorMessage.split(":");
        setErr(errForToast[1]);
        console.log(`Error Message: ${errorMessage}`);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form
        onSubmit={submitLoginHandler}
        style={{ width: "30%" }}
        className="rounded-1 shadow p-4"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 className="text-center mb-5">Sign in to your account</h3>
          <p className="text-danger mb-5">
            {err && <FaExclamationCircle></FaExclamationCircle>} {err}
          </p>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
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

        <div className="d-flex justify-content-between text-secondary mb-3">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Link onClick={forgetPassHandler} className="text-decoration-none">
            Forgot password?
          </Link>
        </div>

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
          <Button className="w-100 mb-3" variant="primary" type="submit">
            Login
          </Button>
        )}

        <div className="d-flex mb-3">
          <Button
            onClick={handleGoogleLogin}
            className="w-100 me-2"
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button
            onClick={handleGithubLogin}
            className="w-100"
            variant="outline-secondary"
          >
            <FaGithub></FaGithub> Login with Github
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
