import React from 'react';
import { Helmet } from "react-helmet-async";

const UpdateSpot = () => {
    return (
        <div className="container mx-auto">
        <Helmet>
          <title>Moon Adventure |Update Tourist Spot</title>
        </Helmet>
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl font-bold">Add a new Tourist Spot</h2>
          {/* <form onSubmit={handleAddCoffee}> */}
          <form>
            {/* form 1st row */}
            <div className="md:flex gap-3 mb-8">
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Image</span>
                </div>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Tourists spot Name</span>
                </div>
                <input
                  name="tourists-spot-name"
                  type="text"
                  placeholder="tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form 2nd row */}
            <div className="md:flex gap-3 mb-8">
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Country Name</span>
                </div>
                <input
                  name="country-name"
                  type="text"
                  placeholder="Country Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Location</span>
                </div>
                <input
                  name="location"
                  type="text"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form 3rd row */}
            <div className="md:flex gap-3 mb-8">
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Seasonality</span>
                </div>
                <input
                  name="seasonality"
                  type="text"
                  placeholder="seasonality"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Average Cost</span>
                </div>
                <input
                  name="average-cost"
                  type="text"
                  placeholder="average cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
            {/* form 4rd row */}
            <div className="md:flex gap-3 mb-8">
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Travel Time</span>
                </div>
                <input
                  name="travel-time"
                  type="text"
                  placeholder="Travel Time"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Total Visitors PerYear</span>
                </div>
                <input
                  name="total-visitors-per-year"
                  type="text"
                  placeholder="total Visitors PerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <label className="form-control w-full mb-8">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                name="short-description"
                type="text"
                placeholder="short description"
                className="input input-bordered w-full"
              />
            </label>
            <input
              type="submit"
              className="btn btn-block  bg-green-400 text-white"
              value="Update Spot info"
            />
          </form>
        </div>
      </div>
    );
};

export default UpdateSpot;