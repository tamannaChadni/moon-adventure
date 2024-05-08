import React from "react";
import { useLoaderData } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpotDetails = () => {
  const spot = useLoaderData();
  // const { _id } = useParams();
  // const perSpot = spot.find((b) => b._id == _id);

  const {
     image,
     country_name, 
     location, 
     seasonality, 
     average_cost,
     travel_time,
     totalVisitorsPerYear,
     short_description
  } = spot;

  return (
    <div className="container mx-auto mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{country_name}</h2>
          <p className=" font-extralight"> {seasonality}</p>
          <hr />
          <p className=" font-light">{ average_cost}</p>
          <hr />
          <p className="font-semibold"> {travel_time}</p>
          
          
          <p className="font-semibold">
            <span className="text-lime-500">{totalVisitorsPerYear}</span>
          </p>
          <p className="font-semibold">
            <span className="text-lime-500">{short_description}</span>
          </p>
          <p className="font-semibold">
            <span className="text-lime-500">{location}</span>
          </p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SpotDetails;
