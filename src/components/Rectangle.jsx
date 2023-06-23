import React from "react";
import { Image } from "react-bootstrap";

const Rectangle = () => {
  return (
    <div className="big-coffee" style={{ height: "100vh"}}>
      <Image
        className="w-100 h-100"
        style={{ objectFit: "fill" }}
        src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687366274/cofeshop/Rectangle_gangan_an3q33.png"
      />
    </div>
  );
};

export default Rectangle;
