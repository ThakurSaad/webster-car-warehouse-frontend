import React from "react";
import auth from "../../firebase.init";
import "./Register.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userState] = useAuthState(auth);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    if (userState) {
      toast("Thank you for registration");
      event.target.reset();
      navigate("/home");
    }
  };

  return (
    <div className="register-form container w-50 mx-auto">
      <h2 className="text-center pt-3">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <br />
        <input type="email" name="email" placeholder="Your Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input
          className="btn btn-dark w-100 d-block mx-auto mb-2"
          type="submit"
          value="Register"
        />
      </form>
      <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
