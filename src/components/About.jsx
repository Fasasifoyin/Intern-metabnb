import React from "react";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <div
      style={{ marginTop: "90px" }}
      className="backG-brown second-brown py-4 px-2 py-lg-0"
    >
      <div className="div d-flex flex-column flex-lg-row gap-3 justify-content-between">
        <div className="brown-section d-flex flex-column gap-3 justify-content-center">
          <h1
            className="text-break texting-white font text-center text-lg-start"
            style={{ letterSpacing: "5px" }}
          >
            ABOUT US
          </h1>
          <p className="fs-4 text-white text-break" style={{ opacity: "0.7" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sed,
            deleniti omnis dicta optio recusandae simil. Tio recusandae simil
            amet consectetur adipisicing
          </p>
        </div>
        <div className="brown-section position-relative">
          <div className="d-none d-lg-flex flex-column justify-content-between w-100 h-100 align-items-end">
            <div style={{ width: "220px", height: "32%" }}>
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687362978/cofeshop/person-taking-measures-wood_1_viwo9m.png"
              />
            </div>
            <div style={{ width: "220px", height: "32%" }}>
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687363114/cofeshop/cropped-man-wearing-blue-overall-drawing-furniture-sheet-paper_1_vcnj6h.png"
              />
            </div>
          </div>
          <div
            className="about-image"
          >
            <Image
              className="w-100 h-100"
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687363642/cofeshop/portrait-young-motivated-carpenter-standing-by-woodworking-machine-his-carpentry-workshop_1_queyaz.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
