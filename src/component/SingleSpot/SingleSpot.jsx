import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const SingleSpot = ({ spot }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, image, country_name, location, seasonality, average_cost,travel_time,totalVisitorsPerYear,short_description } = spot;
    return (
        <article className="flex flex-col dark:bg-gray-50">
      
        <img data-aos="fade-left"
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={image}
        />
      
      <div className="flex flex-col flex-1 p-6">
        <Link to={_id}></Link>
        
        <h3 data-aos="fade-right" className="flex-1 py-2 text-lg font-semibold leading-snug text-red-600">
          {country_name}
        </h3>
        <p className="text-lime-400 font-semibold text-xl"><span className="text-black">Location: </span> {location}</p>
        <p className="text-teal-400 font-semibold text-xl"><span className="text-black">Seasonality: </span> {seasonality}</p>
        <p className="text-green-400 font-semibold text-xl"><span className="text-black">People come to visit: </span> {totalVisitorsPerYear}</p>
        <p className="text-red-400 font-semibold text-xl"><span className="text-black">Description: </span> {short_description}</p>
        
        
        <div className="flex flex-wrap justify-between items-center pt-3 space-x-2 text-xs dark:text-gray-600">
          <span className="font-bold text-yellow-500 text-xl">{average_cost}</span>
          <div className="flex gap-1 items-center">
            <span>
            <FaDollarSign />

            </span>
            <span className="font-bold text-yellow-500 text-xl">{travel_time}</span>
          </div>
          <Link to={`/spot/${_id}`}><button  data-aos="flip-up" className="btn text-white bg-lime-400 ">View Spot</button></Link>
        </div>
      </div>
    </article>
    );
};

export default SingleSpot;