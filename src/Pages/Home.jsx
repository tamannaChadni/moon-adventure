import React from "react";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Baner from "../component/Banner/Baner";
import AboutUs from "./AboutUs/AboutUs";
import Proccess from "./Proccess/Proccess";
import Country from "../component/Country/Country";
import Spot from "../component/Spot/Spot";
AOS.init();


const Home = () => {

  

  return (
    <div>
      <Helmet>
        <title>Moon Adventure | Home</title>
      </Helmet>
      <Baner></Baner>
      {/* <Spot></Spot> */}
      {/* <Country></Country> */}
      <AboutUs></AboutUs>
      <Proccess></Proccess>
    </div>
  );
};

export default Home;
