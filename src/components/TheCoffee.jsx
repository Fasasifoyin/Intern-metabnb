import React from "react";
import { Image } from "react-bootstrap";

const TheCoffee = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="myContainer">
        <h1 className="texting-white text-center text-lg-start font mb-5">
          THE COFFEE <br /> WE WORK WITH
        </h1>

        <div className="d-flex justify-content-between flex-wrap gap-5">
          <div className="body">
            <div className="body-image-orange" style={{ height: "180px" }}>
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687378723/cofeshop/old-wood-grain-background_2_1_f4rbrw.png"
              />
            </div>
            <h4 className="body-header texting-white">Black Coffee</h4>
            <h4 className="body-body text-white" style={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
              aperiam!
            </h4>
          </div>
          <div className="body">
            <div className="body-image-orange" style={{ height: "180px" }}>
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687385010/cofeshop/wood-texture-design-decoration_1_1_iwp6zv.png"
              />
            </div>
            <h4 className="body-header texting-white">Latte</h4>
            <h4 className="body-body text-white" style={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
              aperiam!
            </h4>
          </div>
          <div className="body">
            <div className="body-image-orange" style={{ height: "180px" }}>
              <Image
                className="w-100 h-100"
                src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1687385058/cofeshop/pale-oak-wood-texture-design-background_1_1_virqpv.png"
              />
            </div>
            <h4 className="body-header texting-white">Expresso</h4>
            <h4 className="body-body text-white" style={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
              aperiam!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCoffee;
