import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../features/gamesSlice";
import { collection, doc, updateDoc } from "firebase/firestore";
import { updateUserRating } from "../../../../features/user";
import { db } from "../../../../firebase/firebase";

function Stars({ details }) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(null);
  const { userRating } = useSelector((store) => store.user);

  // const gameRef = doc(db, "games", `${details.name}`, "gameRatings");
  // const gameRatingRef = collection(gameRef, doc.id);

  // const updateRating = async () => {
  //   await updateDoc(gameRatingRef, {
  //     gameRating: userRating,
  //   });
  // };

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
                onClick={(e) => {
                  dispatch(updateUserRating(e.target.value));
                }}
              />
              <div
                onMouseLeave={() => setHover(null)}
                onMouseEnter={() => setHover(currentRating)}
                size={30}
                className="cursor-pointer h-8 w-8 center"
              >
                {currentRating <= (hover || userRating) ? (
                  <FaStar size={30} />
                ) : (
                  <FaRegStar size={20} />
                )}
              </div>
            </label>
          );
        })}
      </div>
      <Button
        onClick={() => {
          // updateRating();
          dispatch(closeModal());
        }}
      >
        add your rate
      </Button>
    </div>
  );
}

export default Stars;
