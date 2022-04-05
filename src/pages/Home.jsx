import React from "react";
import Ribbon from "../components/Ribbon";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Ribbon />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
