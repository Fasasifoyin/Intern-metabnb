import React from "react";
import { Image } from "react-bootstrap";

const Popular = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="myContainer">
        <h1 className="texting-white text-center text-lg-start font mb-5">
          POPULAR DESTINATION FOR COFFEE LOVERS
        </h1>
        <div className="d-flex flex-column flex-lg-row justify-content-between mb-4">
          <div className="brown-section mb-4 mb-lg-0" style={{height:"300px"}}>
            <Image className="w-100 h-100" src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687387365/cofeshop/video_1_lbbbnt.png"/>  
          </div>
          <div className="d-flex flex-column justify-content-center gap-3 brown-section">
            <p className="texting-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et reicien. Nsectetur adipisicing elit</p>
            <p className="texting-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et reicien. Nsectetur adipisicing elit</p>
            <p className="texting-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et reicien. Nsectetur adipisicing elit</p>
          </div>
        </div>
        <div className="text-center">
          <button className="myBTN backG-brown texting-white">Get a booking</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
