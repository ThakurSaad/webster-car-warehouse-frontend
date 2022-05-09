import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../Images/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-dark border-secondary d-block mx-auto w-100 my-2"
      >
        <img src={google} alt="" />
        <span className="px-2">Google Sign Up</span>
      </button>
    </div>
  );
};

export default SocialLogin;
