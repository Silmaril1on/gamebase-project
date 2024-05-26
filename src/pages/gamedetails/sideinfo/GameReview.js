import React from "react";
import { NavLink } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import RateHeader from "./starrating/RateHeader";

function GameReview({ details }) {
  return (
    <section className="w-full h-full flex flex-col items-start pl-5 space-y-2 font-light">
      <div className="center flex-row space-x-2">
        <MdReviews className="text-2xl text-amber-400 mt-2" />
        <NavLink
          to="/userreviews"
          state={{ details: details }}
          className="text-xl hover:underline"
        >
          User Reviews
        </NavLink>
      </div>
      <div className=" center flex-row space-x-2">
        <FaStar className="text-2xl text-amber-400" />
        <NavLink
          to="/userreviews"
          state={{ details: details }}
          className="text-xl  hover:underline"
        >
          GB Rating
        </NavLink>
      </div>
      <div className="center flex-row space-x-2">
        <RateHeader details={details} />
      </div>
    </section>
  );
}

export default GameReview;
