import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const AddMyCar = () => {
  const { addmycarsId } = useParams();
  const [addmycar, setAddMyCar] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${addmycarsId}`)
      .then((res) => res.json())
      .then((data) => setAddMyCar(data));
  }, [addmycarsId]);
  console.log(addmycar);

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order : {addmycar.name}</h2>
      <form /* onSubmit={handlePlaceOrder} */>
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
          value={addmycar.name}
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
        <input className="btn btn-dark w-100 mx-auto" type="submit" value="Please Order" />
      </form>
    </div>
  );
};

export default AddMyCar;
