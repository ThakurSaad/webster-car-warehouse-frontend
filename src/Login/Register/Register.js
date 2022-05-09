import React from "react";
import auth from "../../firebase.init";
import "./Register.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  let errorElement;
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    toast("Verify your email");
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    event.target.reset();
  };

  return (
    <div className="form container w-50 mx-auto">
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
      {errorElement}
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
