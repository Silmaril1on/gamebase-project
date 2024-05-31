import React from "react";
import { NavLink } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import RateHeader from "./starrating/RateHeader";
import GB from "./GBrating/GB";

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
      <GB details={details} />
      <RateHeader details={details} />
    </section>
  );
}

export default GameReview;
