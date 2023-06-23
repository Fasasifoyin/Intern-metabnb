import React from "react";
import Rectangle from "./Rectangle";
import HomeDiv from "./HomeDiv";

const Home = () => {
  return (
    <div className="position-relative" style={{ minHeight: "100vh" }}>
      <Rectangle />
      <HomeDiv />
    </div>
  );
};

export default Home;
