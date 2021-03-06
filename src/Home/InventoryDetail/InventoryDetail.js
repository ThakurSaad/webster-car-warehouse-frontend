import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = ({ car }) => {
  const { supplier, quantity, description, price, image, _id } = car;
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/updateinventorydetail/${_id}`);
  };

  return (
    <div className="inventory-detail rounded">
      <img className="rounded img-fluid" src={image} alt="" />
      <div className="inventory-detail-desc ms-1">
        <h3 className="mt-1">{car.name}</h3>
        <p>Quantity : {quantity}</p>
        <p>Price : {price}</p>
        <p>Supplier : {supplier}</p>
        <p>Description : {description}</p>
      </div>
      <Button
        onClick={() => handleUpdate(_id)}
        className="d-block mx-auto w-50 mt-3"
        variant="light"
      >
        Update
      </Button>
    </div>
  );
};

export default InventoryDetail;
