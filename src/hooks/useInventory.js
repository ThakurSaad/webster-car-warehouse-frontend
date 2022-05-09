import { useEffect, useState } from "react";

const useInventory = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-fortress-67244.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return [cars, setCars];
};

export default useInventory;
