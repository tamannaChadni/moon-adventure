import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="container mx-auto ">
        
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/5FdGN9N/about.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-semibold text-green-600">About Us</h1>
      <p className="text-3xl font-bold ">Welcome <span className="text-yellow-400">Moon Adventure</span></p>
      <p className="mt-2">We work with the highest commitment and based on the concept of “Experience”, providing a personalised and friendly service that will allow you to have a unique.</p>
      <p className="mt-2">The company is based in Cairo and provides all types of tourist services: from Incoming and Outgoing tour packages, extensive and unique excursions.</p>

      <div className="mt-2">
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="mb-0 text-black">First Class Flights</p>
                        </div>
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="mb-0 text-black">Handpicked Hotels</p>
                        </div>
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="mb-0 text-black">5 Star Accommodations</p>
                        </div>
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="mb-0 text-black">Latest Model Vehicles</p>
                        </div>
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="mb-0 text-black">150 Premium City Tours</p>
                        </div>
                        <div className="flex gap-2 items-center text-lime-400">
                        <FaArrowRightLong />
                            <p className="text-black">24/7 Service</p>
                        </div>
                    </div>
      <button className="btn bg-green-600 text-white mt-4">Read more</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default AboutUs;
