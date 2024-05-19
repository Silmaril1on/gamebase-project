import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "../../../../components/Button";

function Stars({ setRating, rating, addRating }) {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-col center">
      <div className="mt-5 w-full center mb-5">
        {[...Array(10)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index} className="text-amber-400">
              <input
                type="radio"
                name="rating"
                value={currentRating}
                // onChange={() => setRating(currentRating)}
                onChange={() => addRating(currentRating)}
              />
              <div
                onMouseLeave={() => setHover(null)}
                onMouseEnter={() => setHover(currentRating)}
                size={30}
                className="cursor-pointer h-8 w-8 center"
              >
                {currentRating <= (hover || rating) ? (
                  <FaStar size={30} />
                ) : (
                  <FaRegStar size={20} />
                )}
              </div>
            </label>
          );
        })}
      </div>
      <Button onClick={() => setRating(null)}>remove rating</Button>
    </div>
  );
}

export default Stars;
