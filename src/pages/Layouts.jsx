import React from "react";
import Ribbon from "../components/Ribbon";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Ribbon />
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layouts;
