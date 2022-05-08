import React from "react";
import { useParams } from "react-router-dom";

const UpdateInventoryDetail = () => {
  const { inventoryId } = useParams();

  fetch(`http://localhost:5000/inventory/${inventoryId}`)
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Update Inventory detail: {inventoryId}</h1>
    </div>
  );
};

export default UpdateInventoryDetail;
