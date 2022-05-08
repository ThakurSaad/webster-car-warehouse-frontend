import React from "react";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
