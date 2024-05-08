import React from "react";
import { Link } from "react-router-dom";
// , spot
// eslint-disable-next-line react/prop-types
const CountryCard = ({ country }) => {
  // console.log(spot);
  // eslint-disable-next-line react/prop-types
  // const singleSpot = spot.find((s) => s.country_name == country.name);
  // console.log(singleSpot);
  // eslint-disable-next-line react/prop-types
  const { name, photo, description } = country;
  // console.log(country);
  // const showCountry = ()=>{

  //   const spot = useLoaderData();

  // }
  // eslint-disable-next-line react/prop-types
  // function LimitedParagraph({ text }) {
  //   const limit = 100;
  //   // eslint-disable-next-line react/prop-types
  //   const words = text.split(' ');
  
  //   if (words.length > limit) {
  //     text = words.slice(0, limit).join(' ') + '...';
  //   }
  
  //   return <p>{text}</p>;
  // }

  return (
    <div>
      <div className=" bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
          {/* <Link to={`selected-country/${name}`}> */}
            <img src={photo} alt="photo" className="rounded-xl mx-auto object-fill w-[175px] " />
          {/* </Link> */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lime-400">{name}</h2>
          {/* <p>
          <LimitedParagraph text={description} />
          </p> */}
          
           {/* eslint-disable-next-line react/prop-types */}
          <p>{description} <button className="btn btn-sm text-green-700 bg-yellow-400">read more</button></p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
