import React, { useState } from "react";
import "./InventoryDetail2.css";
import { Button } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryDetail2 = ({ car }) => {
  const { supplier, quantity, description, price, image, _id } = car;
  const [cars, setCars] = useInventory();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    if (window.confirm("Do You Want To Delete")) {
      fetch(`https://tranquil-fortress-67244.herokuapp.com/inventory/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = cars.filter((car) => car._id !== _id);
          setCars(remaining);
          toast("Item deleted successfully. Please reload");
        });
    }
  };

  return (
    <div className="inventory-detail inventory-detail-2 rounded">
      <img className="rounded img-fluid" src={image} alt="" />
      <div className="inventory-detail-desc ms-1">
        <h3>{car.name}</h3>
        <p>Quantity : {quantity}</p>
        <p>Price : {price}</p>
        <p>Supplier : {supplier}</p>
        <p>Description : {description}</p>
      </div>
      <div className="row justify-content-evenly">
        <Button
          onClick={() => navigate(`/updateinventorydetail/${_id}`)}
          className="mt-3"
          variant="light"
          style={{ width: "100px" }}
        >
          Update
        </Button>
        <Button
          onClick={() => handleDelete(_id)}
          className="delete-btn w-25 mt-3"
          variant="light"
        >
          Delete
        </Button>
      </div>
      <Button
        onClick={() => navigate(`/addmycars/${_id}`)}
        className="mt-3"
        variant="dark"
        style={{ width: "200px", margin: "0 auto", display: "block" }}
      >
        Add To My Car
      </Button>
    </div>
  );
};

export default InventoryDetail2;
