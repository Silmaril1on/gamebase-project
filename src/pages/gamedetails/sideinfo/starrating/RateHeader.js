import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openStarPanel } from "../../../../features/gamesSlice";

function RateHeader() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(openStarPanel())}
      className="center flex-row space-x-2 cursor-pointer"
    >
      <FaRegStar className="text-2xl text-amber-400" />
      <h1 to="/userreviews" className="text-xl  hover:underline">
        Your Rating
      </h1>
    </div>
  );
}

export default RateHeader;
