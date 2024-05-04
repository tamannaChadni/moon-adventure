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
import { useLoaderData } from "react-router-dom";
AOS.init();


const Home = () => {

  const spot = useLoaderData();
  // console.log(spot);


  

  return (
    <div>
      <Helmet>
        <title>Moon Adventure | Home</title>
      </Helmet>
      <Baner></Baner>
      <Spot spot={spot} ></Spot>
      <Country ></Country>
      <AboutUs></AboutUs>
      <Proccess></Proccess>
    </div>
  );
};

export default Home;
