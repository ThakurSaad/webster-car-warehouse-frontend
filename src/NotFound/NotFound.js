import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import notFound from "../Images/404.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <img className="img-fluid" src={notFound} alt="" />
      <Button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-lg btn-dark my-5"
      >
        Back To Home
      </Button>
    </div>
  );
};

export default NotFound;
