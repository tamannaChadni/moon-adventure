import React from "react";
import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
// import SingleProperty from "../SingleProperty/SingleProperty";

const MyList = () => {
    // const properties = useLoaderData();
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure | My List</title>
      </Helmet>
      
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Display My Listed Tourist Spot</h2>
            <p className="font-serif text-xl dark:text-gray-600">
           There are all those places which i like most
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {/* {properties.map((property) => (
              <SingleProperty key={property.id} property={property}></SingleProperty>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyList;
