import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  const { service } = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <Services key={service._id} service={service}></Services>
    </div>
  );
};

export default Home;
