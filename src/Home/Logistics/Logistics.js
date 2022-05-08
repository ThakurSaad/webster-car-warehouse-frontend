import React from "react";
import "./Logistics.css";
import blueJeep from "../../Images/blue-jeep.png";
import blueJeep2 from "../../Images/blue-jeep-2.png";

const Logistics = () => {
  return (
    <div className="my-5">
      <h1 className="text-center my-4">Logistics</h1>
      <section className="position-relative">
        <div className="logistics-img">
          <img className="img-fluid d-md-block d-none" src={blueJeep} alt="" />
          <img className="img-fluid d-block d-md-none" src={blueJeep2} alt="" />
        </div>
        <div className="logistic-detail text-white row position-absolute gy-5">
          <div className="col-6 col-lg-3 text-center">
            <h4 className="fs-1 fw-bolder">82.000</h4>
            <p className="fs-5">Cars For Sale</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h4 className="fs-1 fw-bolder">6.500</h4>
            <p className="fs-5">VERIFIED DEALERS</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h4 className="fs-1 fw-bolder">1.000</h4>
            <p className="fs-5">VISITORS PER DAY</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <h4 className="fs-1 fw-bolder">5.000</h4>
            <p className="fs-5">DEALER REVIEWS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
