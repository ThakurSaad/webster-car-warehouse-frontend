import React from "react";
import auth from "../../firebase.init";
import "./Register.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userState] = useAuthState(auth);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    if (userState) {
      toast("Thank you for registration");
    }
  };

  return (
    <div className="register-form">
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
    </div>
  );
};

export default Register;
