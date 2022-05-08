import React from "react";
import "./Inventory.css";
import useInventory from "../../hooks/useInventory";
import InventoryDetail from "../InventoryDetail/InventoryDetail";

const Inventory = () => {
  const [cars, setCars] = useInventory();
  console.log(cars);
  return (
    <div>
      <h1 className="text-center my-4">Inventory</h1>
      <div className="inventory">
        {cars.slice(0,6).map((car) => (
          <InventoryDetail car={car} key={car._id}></InventoryDetail>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
