import React from "react";
import { GrMap } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { CiPlane } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const Proccess = () => {
  return (
    <div className="container mx-auto mt-3 mb-4">
      <div>
        <h1 className="text-center text-lime-500 text-4xl font-bold">
          Process
        </h1>
        <h1 className="text-center mt-2 text-2xl">3 Easy Steps</h1>
      </div>
      <div className="lg:flex lg:gap-3">
        {/* 1st card */}
        <div className="card lg:w-96 bg-base-100 shadow-xl  ">
          <div className="card-body">
            <Tooltip anchorSelect=".my-anchor-element" place="top">
              Moon Adventure
            </Tooltip>
            <div className=" my-anchor-element content-center text-red-500 mx-auto">
              <GrMap />
            </div>
            <h2 className="card-title text-lime-500">Choose A Destination</h2>
            <p>
              A destination article is about a place. Your goal is to entice
              your reader to go there. How you define your place depends on your
              audience. 1. Draw your reader in – with a picture or an anecdote.
            </p>
          </div>
        </div>
        {/* 1st card */}
        {/* 2nd card */}
        <div className="card lg:w-96 bg-base-100 shadow-xl mt-2">
          <div className="card-body">
          <Tooltip anchorSelect=".my-anchor-element" place="top">
              Moon Adventure
            </Tooltip>
            <div className="my-anchor-element content-center text-red-500 mx-auto">
              <CiDollar />
            </div>
            <h2 className="card-title text-lime-500">Pay Online</h2>
            <p>
              payments that are initiated over the internet for goods or
              services purchased either online or offline. Common methods to
              facilitate this include: Bank Debits via online mandate
            </p>
          </div>
        </div>
        {/* 2nd card */}
        {/* 3rd card */}
        <div className="card lg:w-96 bg-base-100 shadow-xl mt-2">
          <div className="card-body">
          <Tooltip anchorSelect=".my-anchor-element" place="top">
              Moon Adventure
            </Tooltip>
            <div className=" my-anchor-element content-center text-red-500 mx-auto ">
              <CiPlane />
            </div>
            <h2 className="card-title text-lime-500">Fly Today</h2>
            <p>
              Air transport is currently used in almost all industrial sectors
              and distribution chains. Most companies use air transport to
              market goods and products internationally or to deliver samples
              and documents related to foreign trade operations.
            </p>
          </div>
        </div>
        {/* 3rd card */}
      </div>
    </div>
  );
};

export default Proccess;
