import React from 'react';

// eslint-disable-next-line react/prop-types
const CountryCard = ({country}) => {


    // eslint-disable-next-line react/prop-types
  const { name, photo, description } = country;
    return (

        
        <div>
            <div className=" bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 ">
            <img
              // src="https://i.ibb.co/nm2ZHGb/img2.jpg"
              src={photo}
              alt="photo"
              className="rounded-xl mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lime-400">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        </div>
    );
};

export default CountryCard;