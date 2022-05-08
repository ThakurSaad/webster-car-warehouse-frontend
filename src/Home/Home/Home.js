import React from "react";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import Inventory from "../Inventory/Inventory";
import Logistics from "../Logistics/Logistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <ChooseUs></ChooseUs>
      <Logistics></Logistics>
      <Footer></Footer>
    </div>
  );
};

export default Home;
