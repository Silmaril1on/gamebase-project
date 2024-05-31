import React from "react";
import { FaStar } from "react-icons/fa";
import RatingCount from "./RatingCount";

function GB({ details }) {
  return (
    <div className="flex-row center xl:flex-col">
      <article className="center space-x-2 flex-row cursor-pointer mr-8 xl:mr-0">
        <FaStar className="text-2xl text-amber-400" />
        <h1 className="text-xl">GB Rating</h1>
      </article>
      <RatingCount details={details} />
    </div>
  );
}

export default GB;
