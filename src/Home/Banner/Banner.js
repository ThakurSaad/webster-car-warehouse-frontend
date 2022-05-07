import React from "react";
import "./Banner.css";
import banner from "../../Images/banner.jpg";

const Banner = () => {
  return (
    <div className="position-relative">
      <img className="img-fluid" src={banner} alt="banner" />
      <div className="banner-desc position-absolute">
        <h1 className="banner-title">Webster Car Warehouse</h1>
        <p className="banner-text fs-3 text-white">
          We ensure best service to our customer
        </p>
      </div>
    </div>
  );
};

export default Banner;
