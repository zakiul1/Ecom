import React from "react";
import Ribbon from "../components/Ribbon";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Ribbon />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
