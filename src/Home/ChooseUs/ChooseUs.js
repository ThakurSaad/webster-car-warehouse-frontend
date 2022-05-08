import React from "react";
import "./ChooseUs.css";
import redJeep from "../../Images/red-jeep.png";
import icon1 from "../../Images/f1.svg";
import icon2 from "../../Images/f2.svg";
import icon3 from "../../Images/f3.svg";
import icon4 from "../../Images/f4.svg";

const ChooseUs = () => {
  return (
    <div className="mb-4">
      <h2 className="text-center">Why Choose Us?</h2>
      <section className="choose-us row justify-content-center">
        <div className="choose-us-img text-center col-12 col-lg-6">
          <img className="rounded mt-lg-5" src={redJeep} alt="" />
        </div>
        <div className="choose-us-details col-12 col-lg-6 row gy-2 gy-lg-5">
          <div className="col-12 col-lg-6">
            <img src={icon1} alt="" />
            <h4 className="mt-4 fw-light mb-2">Highly Secured</h4>
            <p>
              Our Stress-Free Finance Department That Can Find Financial
              Solutions To Save You Money.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={icon2} alt="" />
            <h4 className="mt-4 fw-light mb-2">Trusted Agents</h4>
            <p>
              Our Stress-Free Finance Department That Can Find Financial
              Solutions To Save You Money.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={icon3} alt="" />
            <h4 className="mt-4 fw-light mb-2">Get an Offer</h4>
            <p>
              Our Stress-Free Finance Department That Can Find Financial
              Solutions To Save You Money.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={icon4} alt="" />
            <h4 className="mt-4 fw-light mb-2">Free Support</h4>
            <p>
              Our Stress-Free Finance Department That Can Find Financial
              Solutions To Save You Money.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
