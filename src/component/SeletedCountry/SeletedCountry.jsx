import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import SingleSpot from "../SingleSpot/SingleSpot";
import { useLoaderData, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SeletedCountry = ({ country,spot}) => {

    const spots = useLoaderData(spot);
    
    console.log(spots);

    const {toueistSpot} =useParams()
    console.log(toueistSpot);
    // eslint-disable-next-line react/prop-types
    const singleSpot = spot.find((s) => s.country_name == country.name);
    console.log(singleSpot);

    // const country = 

    const [countrySpot, setCountrySpot] = useState(spots);
    useEffect(() => {
        fetch(`https://moon-adventure-ltd-server.vercel.app/selectedCountry/${toueistSpot?.country_name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCountrySpot(data);
          });
      }, [toueistSpot]);






    return (
        <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure | Selected Country</title>
      </Helmet>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
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
      </section>
    </div>
    );
};

export default SeletedCountry;