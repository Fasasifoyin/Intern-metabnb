import React from "react";
import { Image } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PopularCoffee = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="myContainer">
        <h1 className="texting-white text-center font mb-5">POPULAR COFFEE</h1>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-none d-lg-block">
            <AiOutlineArrowLeft
              className="cursor"
              size="3rem"
              style={{ color: "white", opacity: "0.7" }}
            />
          </div>
          <div
            className="d-flex flex-column gap-3 align-items-center popular-coffee"
            style={{ margin: "0 auto" }}
          >
            <div className="w-100 h-100">
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687424950/cofeshop/Group_185_us8pip.png"
              />
            </div>
            <div className="d-flex gap-2">
              <div
                className="cursor"
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  border: "3px solid white",
                }}
              />
              <div
                className="cursor"
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "white",
                }}
              />
              <div
                className="cursor"
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  border: "3px solid white",
                }}
              />
            </div>
          </div>
          <div className="d-none d-lg-block">
            <AiOutlineArrowRight
              className="cursor"
              size="3rem"
              style={{ color: "white", opacity: "0.7" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCoffee;
