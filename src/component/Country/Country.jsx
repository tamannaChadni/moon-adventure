import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import CountryCard from "../CountryCard/CountryCard";

const Country = () => {
  const loadedCountries = useLoaderData();
  
  const [countries, setCountries] = useState(loadedCountries);


  
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
            setCountries={setCountries}
          ></CountryCard>)
        }
        
        {/* 1st card */}
        {/* 2nd card */}
        {/* <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/vx29vDX/img3.jpg"
              alt="photo"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">Morocco</h2>
            <p>Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks marketplaces selling ceramics, jewelry and metal lanterns. The capital Rabat Kasbah of the Udayas is a 12th-century royal fort overlooking the water</p>
          </div>
        </div> */}
        {/* 2nd card */}
        {/* 3rd card */}
        {/* <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/WD8QmHF/img1.jpg"
              alt="photo"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">Egypt</h2>
            <p>Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza colossal Pyramids and Great Sphinx as well as Luxor hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque</p>
          </div>
        </div> */}
        {/* 3rd card */}
      </div>
    </div>
  );
};

export default Country;
