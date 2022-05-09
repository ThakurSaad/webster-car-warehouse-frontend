import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddMyCar = () => {
  const { addmycarsId } = useParams();
  const [addMyCar, setAddMyCar] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://tranquil-fortress-67244.herokuapp.com/inventory/${addmycarsId}`)
      .then((res) => res.json())
      .then((data) => setAddMyCar(data));
  }, [addmycarsId]);
  console.log(addMyCar);

  const handleAddMyCar = (event) => {
    event.preventDefault();
    const myNewCar = {
      email: user.email,
      myCar: addMyCar.name,
      myCarId: addmycarsId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(myNewCar);

    axios.post("https://tranquil-fortress-67244.herokuapp.com/mycars", myNewCar).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your order is booked");
        event.target.reset();
      }
    });
  };

  return (
    <div className="form w-50 mx-auto my-5">
      <h2 className="text-center my-4">
        Add To Your Cars Here : {addMyCar.name}
      </h2>
      <form onSubmit={handleAddMyCar}>
        <input
          value={user?.displayName}
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          disabled
        />
        <br />
        <input
          value={user?.email}
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Your email"
          required
          disabled
        />
        <br />
        <input
          value={addMyCar.name}
          className="w-100 mb-2"
          type="text"
          name="myCar"
          placeholder="Your Car"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Your address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          placeholder="Your phone"
          required
        />
        <br />
        <input
          className="btn btn-dark w-100 mx-auto"
          type="submit"
          value="Add To My Cars"
        />
      </form>
    </div>
  );
};

export default AddMyCar;
