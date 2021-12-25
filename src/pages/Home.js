import React from "react";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div style={{ flex: 1 }}>
      <Slider />
      <Newsletter />
    </div>
  );
};

export default Home;
