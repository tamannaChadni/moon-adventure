import React from "react";
// import React , { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
// import { AuthContext } from "../../Providers/AuthProvider";

const AddSpots = () => {
  // const {user} = useContext(AuthContext);



  const handleAddSpot = event => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const short_description = form.short_description.value;
    // const email = user.email;

    const newSpot = { image, tourists_spot_name, country_name, location, seasonality, average_cost, travel_time,totalVisitorsPerYear, short_description}

    console.log(newSpot);

    // send data to the server

    fetch('http://localhost:5000/spot',{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(newSpot)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Spot Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}


  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Moon Adventure |Add Tourist Spot</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Add a new Tourist Spot</h2>
        <form onSubmit={handleAddSpot}>
        {/* <form> */}
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
                name="tourists_spot_name"
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
                name="country_name"
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
                name="average_cost"
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
                name="travel_time"
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
                name="totalVisitorsPerYear"
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
              name="short_description"
              type="text"
              placeholder="short description"
              className="input input-bordered w-full"
            />
          </label>
          <input
            type="submit"
            className="btn btn-block  bg-lime-400 text-white"
            value="Add New Spot "
          />
        </form>
      </div>
    </div>
  );
};

export default AddSpots;
