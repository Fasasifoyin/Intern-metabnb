import React from "react";
import { Image } from "react-bootstrap";

const HomeDiv = () => {
  return (
    <div
      className="backG-brown brown-home position-absolute py-3 px-5"
      style={{ right: 0 }}
    >
      <div className="d-lg-flex justify-content-between h-100">
        <div className="layout brown-section">
          <div className="d-flex flex-column gap-2">
            <h1
              className="text-break texting-white font text-center text-lg-start"
              style={{ letterSpacing: "5px" }}
            >
              YOUR <br />
              COFFEE. <br /> YOUR WAY.
            </h1>
            <p
              className="fs-4 text-white text-break"
              style={{ opacity: "0.7" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              sed, deleniti omnis dicta optio recusandae simil
            </p>
            <div>
              <button className="backG-orange myBTN texting-white homeBtn">
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="layout h-100">
          <hr style={{ border: "1px solid white", height: "70%" }} />
        </div>
        <div
          className="d-none d-lg-flex flex-column justify-content-between h-100"
          style={{ width: "45%" }}
        >
          <div style={{ height: "32%", width: "250px", marginLeft: "auto" }}>
            <Image
              className="w-100 h-100"
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687372099/cofeshop/image_3_eikm55.png"
            />
          </div>
          <div style={{ height: "32%", width: "250px" }}>
            <Image
              className="w-100 h-100"
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687371975/cofeshop/image_quaxb1.png"
            />
          </div>
          <div
            className="position-relative"
            style={{ height: "32%", width: "250px", marginLeft: "auto" }}
          >
            <Image
              className="w-100 h-100 position-absolute"
              style={{ top: "-20px" }}
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687372011/cofeshop/image_2_q8ecxw.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
