import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div style={{ marginTop: "90px" }} className="backG-brown footer">
      <div className="myContainer">
        <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between texting-white align-items-center mb-4">
          <h3>CofeShop</h3>
          <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
            <FiPhoneCall size="2.5rem" />
            <h3>+000 000 000 000</h3>
          </div>
          <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
            <IoLocationOutline size="2.5rem" />
            <h3>Na Plzence 1166/0150 00</h3>
          </div>
        </div>
        <p className="texting-white text-center text-lg-start">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
