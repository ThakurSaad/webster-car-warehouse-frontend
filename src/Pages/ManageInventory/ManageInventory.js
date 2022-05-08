import React, { useEffect } from "react";
import "./ManageInventory.css";
import useInventory from "../../hooks/useInventory";
import InventoryDetail2 from "../InventoryDetail2/InventoryDetail2";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useInventory();

//   useEffect(() => {
//     fetch(`http://localhost:5000/inventory`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("from manage inventory");
//         setCars(data);
//       });
//   }, []);

  return (
    <section>
      <h2 className="text-center mt-5">Manage Inventories</h2>
      <div className="manage-Inventory my-5">
        {cars.map((car) => (
          <InventoryDetail2 car={car} key={car._id}></InventoryDetail2>
        ))}
      </div>
      <Button
        onClick={() => navigate("/addnewcar")}
        className="d-block w-25 mx-auto my-5"
        variant="dark"
      >
        Add New Car
      </Button>
    </section>
  );
};

export default ManageInventory;
