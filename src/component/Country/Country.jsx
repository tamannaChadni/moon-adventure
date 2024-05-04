import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import CountryCard from "../CountryCard/CountryCard";
import {useEffect} from 'react'

// eslint-disable-next-line react/prop-types
const Country = ({spot}) => {
  // console.log(spot);
  const loadedCountries = useLoaderData();
  // console.log(loadedCountries);
  
  const [countries, setCountries] = useState(loadedCountries);

  useEffect(()=>{
    fetch('https://moon-adventure-ltd-server.vercel.app/country')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    }).catch(e=>console.log(e.message));
  },[])


  
  return (
    <div className="container mx-auto mt-4">

<div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Tourist Countries In Africa
            </h2>
            <p className="font-serif text-xl dark:text-gray-600">
              We are dedicated to providing world-class service and
              market-leading expertise to our clients.
            </p>
          </div>
          {/* card */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      
        {/* 1st card */}

        {
          countries.map(country => <CountryCard
            key={country._id}
            countries={countries}
            country={country}
            spot={spot}
            
          ></CountryCard >)
        }
        
       
      </div>
    </div>
  );
};

export default Country;
