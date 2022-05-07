import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../Images/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate("/home");
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