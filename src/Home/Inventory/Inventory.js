import React from "react";
import "./Inventory.css";
import useInventory from "../../hooks/useInventory";
import InventoryDetail from "../InventoryDetail/InventoryDetail";
import { Button } from "react-bootstrap";

const Inventory = () => {
  const [cars, setCars] = useInventory();
  console.log(cars);
  return (
    <div className="my-5">
      <h1 className="text-center my-4">Inventory</h1>
      <div className="inventory">
        {cars.slice(0,6).map((car) => (
          <InventoryDetail car={car} key={car._id}></InventoryDetail>
        ))}
      </div>
      <Button
        // onClick={() => handleUpdate(_id)}
        className="d-block mx-auto mt-3"
        variant="dark"
      >
        Manage Inventory
      </Button>
    </div>
  );
};

export default Inventory;
