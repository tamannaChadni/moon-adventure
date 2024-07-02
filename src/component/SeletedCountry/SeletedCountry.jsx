import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
// import SingleSpot from "../SingleSpot/SingleSpot";
import { Link, useLoaderData } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const SeletedCountry = () => {

    const spot = useLoaderData();

    // const { _id, image, country_name, location, seasonality, average_cost,travel_time,totalVisitorsPerYear,short_description } = spot;

    const [country, setCountry] = useState(spot);
  // console.log(user);
  useEffect(() => {
    fetch(`https://moon-adventure-ltd-server.vercel.app/selected-country/${country?.country_name}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountry(data);
      });
  }, [country]);

    
    // console.log(spots);

    // const {toueistSpot} =useParams()
    // console.log(toueistSpot);
    // eslint-disable-next-line react/prop-types
    // const singleSpot = spot.find((s) => s.country_name == country.name);
    // console.log(singleSpot);

    // const country = 

    // const [countrySpot, setCountrySpot] = useState(spots);
    // useEffect(() => {
    //     fetch(`https://moon-adventure-ltd-server.vercel.app/selectedCountry/${toueistSpot?.country_name}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         setCountrySpot(data);
    //       });
    //   }, [toueistSpot]);






    return (
        <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure | Selected Country</title>
      </Helmet>
      {/* <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Display Selected Country Spots</h2>
            <p className="font-serif text-xl dark:text-gray-600">
           We provide World class service for anyone
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {countrySpot?.map((spot) => (
              // eslint-disable-next-line react/prop-types
              <SingleSpot key={spot._id} spot={spot}></SingleSpot>
            ))}
          </div>
        </div>
      </section> */}
       <article className="flex flex-col dark:bg-gray-50">
      
      <img data-aos="fade-left"
        alt=""
        className="object-cover w-full h-52 dark:bg-gray-500"
        src={spot.image}
      />
    
    <div className="flex flex-col flex-1 p-6">
      <Link to={spot._id}></Link>
      
      <h3 data-aos="fade-right" className="flex-1 py-2 text-lg font-semibold leading-snug text-red-600">
        {spot.country_name}
      </h3>
      <p className="text-lime-400 font-semibold text-xl"><span className="text-black">Location: </span> {location}</p>
      <p className="text-teal-400 font-semibold text-xl"><span className="text-black">Seasonality: </span> {spot.seasonality}</p>
      <p className="text-green-400 font-semibold text-xl"><span className="text-black">People come to visit: </span> {spot.totalVisitorsPerYear}</p>
      <p className="text-red-400 font-semibold text-xl"><span className="text-black">Description: </span> {spot.short_description}</p>
      
      
      <div className="flex flex-wrap justify-between items-center pt-3 space-x-2 text-xs dark:text-gray-600">
        <span className="font-bold text-yellow-500 text-xl">{spot.average_cost}</span>
        <div className="flex gap-1 items-center">
          <span>
          <FaDollarSign/>

          </span>
          <span className="font-bold text-yellow-500 text-xl">{spot.travel_time}</span>
        </div>
        {/* <Link to={`/spots/${_id}`}><button  data-aos="flip-up" className="btn text-white bg-lime-400 ">View Spot</button></Link> */}
      </div>
    </div>
  </article>
    </div>
    );
};

export default SeletedCountry;