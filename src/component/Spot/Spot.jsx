import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import "./loader.css";
import SingleSpot from "../SingleSpot/SingleSpot";

const Spot = () => {

    const spots = useLoaderData();

  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg search-loader"></span>
    );
  }
    return (
        <div className="container mx-auto mt-4 ">
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">
                Display latest Tourist Spots
              </h2>
              <p className="font-serif text-xl dark:text-gray-600">
                We are ensure best service for anyone and
                world class expertise to our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {spots.slice(1, 4).map((spot) => (
                <SingleSpot
                  key={spot.id}
                  spot={spot}
                ></SingleSpot>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default Spot;