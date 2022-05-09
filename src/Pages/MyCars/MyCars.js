import React, { useEffect, useState } from "react";
import "./MyCars.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button } from "react-bootstrap";

const MyCars = () => {
  const [myCars, setMyCars] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/mycars?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyCars(data));
  }, [user]);
  console.log(myCars);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/myCars/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = myCars.filter((car) => car._id !== _id);
        console.log(data, remaining);
        setMyCars(remaining);
      });
  };

  return (
    <div className="my-5">
      <h2 className="text-center my-4">My Cars</h2>
      <div className="myCars">
        {myCars.map((car) => (
          <div className="myCar my-3" key={car._id}>
            <h3>{car.myCar}</h3>
            <Button
              onClick={() => handleDelete(car._id)}
              className="delete-btn"
              variant="dark"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCars;
