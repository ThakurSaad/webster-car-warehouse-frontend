import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form /* onSubmit={handleRegister} */>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
        />
        <br />
      </form>
    </div>
  );
};

export default Register;
