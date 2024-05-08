import React from "react";
import { NavLink } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";

function GameReview({ details }) {
  return (
    <section className="w-full h-full flex flex-col items-start pl-5 space-y-2 font-light ">
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
      <div className=" center flex-row space-x-2">
        <FaRegStar className="text-2xl text-amber-400" />
        <NavLink
          to="/userreviews"
          state={{ details: details }}
          className="text-xl  hover:underline"
        >
          Your Rating
        </NavLink>
      </div>
    </section>
  );
}

export default GameReview;
