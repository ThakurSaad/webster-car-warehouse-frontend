import "./Login.css";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [userState] = useAuthState(auth);
  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    if (userState) {
      toast("You are now logged in");
      navigate("/");
    }
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email");
    }
  };

  return (
    <div className="login-form container w-50 mx-auto">
      <h2 className="text-center mt-3">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Your email"
            className="rounded-0"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Your Password"
            className="rounded-0"
            required
          />
        </Form.Group>
        <input
          className="btn btn-dark w-100 d-block mx-auto mb-2"
          type="submit"
          value="Login"
        />
      </Form>
      {errorElement}
      <p className="my-0">
        New to Genius Car ?{" "}
        <Link to="/register" className="text-decoration-none">
          Please Register
        </Link>
      </p>
      <p className="my-0">
        Forget Password ?
        <button
          onClick={resetPassword}
          className="btn btn-link border-0 text-decoration-none"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
