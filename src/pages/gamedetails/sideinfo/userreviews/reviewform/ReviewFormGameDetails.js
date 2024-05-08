import React from "react";
import { useLocation } from "react-router-dom";
import CloseButton from "../../../../../components/CloseButton";

function ReviewFormGameDetails({ setGameReviewForm }) {
  const location = useLocation();
  const details = location.state.details;

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row m-1">
        <div>
          <img src={details.image} alt={details.name} className="w-14" />
        </div>
        <div className="flex flex-col ml-2">
          <h1 className=" font-bold italic capitalize">{details.name}</h1>
          <h1>({details.year})</h1>
          <h1 className="text-xs uppercase">{details.developer}</h1>
        </div>
      </div>
      <CloseButton onClick={() => setGameReviewForm(false)} />
    </div>
  );
}

export default ReviewFormGameDetails;
