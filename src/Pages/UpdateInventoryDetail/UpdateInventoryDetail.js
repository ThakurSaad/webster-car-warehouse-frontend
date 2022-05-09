import React, { useEffect, useState } from "react";
import "./UpdateInventoryDetail.css";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventoryDetail = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [manageQuantity, setManageQuantity] = useState(0);
  let { image, quantity, price, supplier, description, _id } = car;

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setManageQuantity(data.quantity);
      });
  }, [inventoryId]);

  const handleUpdate = async (_id) => {
    const currentQuantity = manageQuantity - 1;
    setManageQuantity(currentQuantity);
    if (manageQuantity <= 0) {
      setManageQuantity(0);
      toast("Quantity can not be less than 0");
    }

    await fetch(`http://localhost:5000/inventory/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ manageQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success handleUpdate", data);
        toast("Quantity Updated Successfully");
      });
  };
  console.log(manageQuantity);

  const handleRestockForm = (event) => {
    event.preventDefault();
    const restockQuantity = event.target.restock.value;
    console.log(restockQuantity);
    setManageQuantity(parseInt(restockQuantity));

    fetch(`http://localhost:5000/inventory/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ manageQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success handleRestockForm", data);
        toast("Quantity Updated Successfully");
      });
  };

  return (
    <section className="my-5">
      <h2 className="text-center my-4">Update Your Inventory Details</h2>
      <div className="inventory-detail rounded mx-auto">
        <img className="rounded img-fluid" src={image} alt="" />
        <div className="inventory-detail-desc ms-1">
          <h3>{car.name}</h3>
          <p>Quantity : {manageQuantity}</p>
          <p>Price : {price}</p>
          <p>Supplier : {supplier}</p>
          <p>Description : {description}</p>
        </div>
        <Button
          onClick={() => handleUpdate(_id)}
          className="d-block mx-auto w-50 mt-3"
          variant="light"
        >
          Deliver
        </Button>
      </div>
      <Button
        onClick={() => navigate("/manageinventory")}
        className="d-block mx-auto mt-3"
        variant="dark"
      >
        Manage Inventories
      </Button>
      <section className="restock text-center my-5">
        <h3>Restock The Item</h3>
        <form onSubmit={handleRestockForm}>
          <input
            className="restock-input p-2"
            placeholder="Enter Quantity"
            type="number"
            name="restock"
          />
          <br />
          <input className="btn btn-dark my-3" type="submit" value="Restock" />
        </form>
      </section>
    </section>
  );
};

export default UpdateInventoryDetail;
