import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleSpot from "../SingleSpot/SingleSpot";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";




const AllSpots = () => {

  const { loading } = useContext(AuthContext);
    const spots = useLoaderData();
    // console.log(spots);

    const [averageCost, setAverageCost] = useState(spots);
    
    if (loading) {
      return (
        <span className="loading loading-dots loading-lg search-loader"></span>
      );
    }


    const handleCostingSort = () => {
      setAverageCost([...averageCost].sort((a, b) => b.average_cost - a.average_cost));

    };


  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure | All Tourist Spot</title>
      </Helmet>


{/* button of sorting*/}
<div className="mt-8 mx-auto text-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-lime-500 text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleCostingSort}>Average Cost</a>
            </li>
            
            
          </ul>
        </div>
      </div>
      {/* button of sorting */}















      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Display All Tourist Spots</h2>
            <p className="font-serif text-xl dark:text-gray-600">
           We provide World class service for anyone
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {spots.map((spot) => (
              <SingleSpot key={spot._id} spot={spot}></SingleSpot>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllSpots;
