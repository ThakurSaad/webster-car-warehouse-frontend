import React from "react";
import { Button } from "react-bootstrap";

const InventoryDetail2 = ({ car }) => {
  const { supplier, quantity, description, price, image, _id } = car;

  return (
    <div className="inventory-detail rounded">
      <img className="rounded img-fluid" src={image} alt="" />
      <div className="inventory-detail-desc ms-1">
        <h3>{car.name}</h3>
        <p>Quantity : {quantity}</p>
        <p>Price : {price}</p>
        <p>Supplier : {supplier}</p>
        <p>Description : {description}</p>
      </div>
      <Button
        //   onClick={() => handleDelete(_id)}
        className="d-block mx-auto w-50 mt-3"
        variant="light"
      >
        Delete
      </Button>
    </div>
  );
};

export default InventoryDetail2;
