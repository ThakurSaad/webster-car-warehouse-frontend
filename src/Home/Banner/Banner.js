import React from "react";
import "./Banner.css";
import banner from "../../Images/banner.png";
import banner2 from "../../Images/banner-2.png";

const Banner = () => {
  return (
    <div className="position-relative">
      <img className="img-fluid d-lg-block d-none" src={banner} alt="banner" />
      <img className="img-fluid d-block d-lg-none" src={banner2} alt="banner" />
      <div className="banner-desc position-absolute mx-auto">
        <h1 className="banner-title">Webster Car Warehouse</h1>
        <p className="banner-text fs-3 text-white">
          We ensure best service to our customer
        </p>
      </div>
    </div>
  );
};

export default Banner;
