import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Cards2 from "../../Components/Cards/Cards2";
import Cards3 from "../../Components/Cards/Card3";
import Cards4 from "../../Components/Cards/Card4";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Cards />
      <Cards2 />
      <Cards3 />
      <Cards4 />
      <Footer />
    </>
  );
};

export default Home;
