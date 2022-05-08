import React from "react";
import "./AddNewCar.css";
import { useForm } from "react-hook-form";

const AddNewCar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-50 add-new-car mx-auto my-5">
      <h1 className="text-center my-4">Add New Car Inventory Here</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Image Link"
          type="text"
          {...register("image")}
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <textarea
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <input
          className="bg-light border rounded py-2 ps-2 mb-2"
          placeholder="Supplier"
          {...register("supplier")}
        />
        <input className="btn btn-dark" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddNewCar;
