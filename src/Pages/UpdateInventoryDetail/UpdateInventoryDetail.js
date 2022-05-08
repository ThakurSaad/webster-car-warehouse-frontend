import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateInventoryDetail = () => {
  const { inventoryId } = useParams();
  const [car, setCar] = useState({});

  const { image, quantity, price, supplier, description } = car;

  fetch(`http://localhost:5000/inventory/${inventoryId}`)
    .then((res) => res.json())
    .then((data) => setCar(data));

  return (
    <div className="inventory-detail rounded mx-auto my-3">
      <img className="rounded img-fluid" src={image} alt="" />
      <div className="inventory-detail-desc ms-1">
        <h3>{car.name}</h3>
        <p>Quantity : {quantity}</p>
        <p>Price : {price}</p>
        <p>Supplier : {supplier}</p>
        <p>Description : {description}</p>
      </div>
      <Button
        // onClick={() => handleUpdate(_id)}
        className="d-block mx-auto w-50 mt-3"
        variant="light"
      >
        Deliver
      </Button>
      <section className="restock">
        
      </section>
    </div>
  );
};

export default UpdateInventoryDetail;
