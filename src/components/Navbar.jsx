import React from "react";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div
      className="position-fixed top-0 left-0 w-100 navbar"
      style={{ height: "100px", zIndex: 10 }}
    >
      <div className="h-100 myContainer">
        <div className="d-flex justify-content-between align-items-center h-100">
          <span className="texting-white fs-2">CofeShop</span>
          <div className="d-none d-lg-flex" style={{ gap: "100px" }}>
            <span className="texting-white cursor">Gallery</span>
            <span className="texting-white cursor">Price for services</span>
            <span className="texting-white cursor">About us</span>
            <span className="texting-white cursor">Contact</span>
          </div>
          <div className="d-lg-none">
            <VscThreeBars color="white" size="2rem" className="cursor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
