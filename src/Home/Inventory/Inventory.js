import React from "react";
import "./Inventory.css";
import useInventory from "../../hooks/useInventory";
import InventoryDetail from "../InventoryDetail/InventoryDetail";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useInventory();
  
  const handleManageInventory = () => {
    navigate("/manageinventory")
  }

  return (
    <div className="my-5">
      <h1 className="text-center my-4">Inventory</h1>
      <div className="inventory">
        {cars.slice(0,6).map((car) => (
          <InventoryDetail car={car} key={car._id}></InventoryDetail>
        ))}
      </div>
      <Button
        onClick={handleManageInventory}
        className="d-block mx-auto mt-3"
        variant="dark"
      >
        Manage Inventories
      </Button>
    </div>
  );
};

export default Inventory;
