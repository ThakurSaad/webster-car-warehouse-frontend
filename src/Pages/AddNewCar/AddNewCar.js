import React from "react";
import "./AddNewCar.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddNewCar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://tranquil-fortress-67244.herokuapp.com/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("New Car Added Successfully To Inventory");
      });
  };

  return (
    <div className="w-50 add-new-car mx-auto my-5">
      <h1 className="text-center my-4">Add New Car Inventory Here</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Name"
          {...register("name")}
          required
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Image Link"
          type="text"
          {...register("image")}
          required
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <textarea
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Description"
          {...register("description")}
          required
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Quantity"
          {...register("quantity")}
          required
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Supplier"
          {...register("supplier")}
          required
        />
        <input className="btn btn-dark" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddNewCar;
