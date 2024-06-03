import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "../../../../components/Button";
import { closeModal } from "../../../../features/gamesSlice";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";

function Stars({
  details,
  userStar,
  setInitialRating,
  initialRating,
  dispatch,
}) {
  const [hover, setHover] = useState(null);
  const gameRatingRef = doc(db, "games", `${details.name}`);

  // const updateRating = async () => {
  //   const found = await getDoc(gameRatingRef);
  //   if (!found.exists()) {
  //     await setDoc(gameRatingRef, {
  //       ratings: arrayUnion({
  //         gameRating: Number(initialRating),
  //         email: auth.currentUser?.email,
  //         author: auth.currentUser?.displayName,
  //         createdAt: new Date().toDateString(),
  //       }),
  //     });
  //   } else {
  //     await updateDoc(gameRatingRef, {
  //       ratings: arrayUnion({
  //         gameRating: Number(initialRating),
  //         email: auth.currentUser?.email,
  //         author: auth.currentUser?.displayName,
  //         createdAt: new Date().toDateString(),
  //       }),
  //     });
  //   }
  // };

  const updateRating = async () => {
    const found = await getDoc(gameRatingRef);
    const rating = (found.data() || {}).ratings || [];
    const myRating = rating.find((r) => r.email === auth.currentUser?.email);
    if (!myRating) {
      await setDoc(gameRatingRef, {
        ratings: arrayUnion({
          gameRating: initialRating,
          email: auth.currentUser?.email,
          author: auth.currentUser?.displayName,
          createdAt: new Date().toDateString(),
        }),
      });
    } else {
      const newRating = rating.map((m) => {
        if (m.email === auth.currentUser?.email) {
          m = {
            ...m,
            gameRating: initialRating,
            createdAt: new Date().toDateString(),
          };
        }
        return m;
      });

      await updateDoc(gameRatingRef, {
        ratings: newRating,
      });
    }
  };

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
                  setInitialRating(e.target.value);
                }}
              />

              {userStar ? (
                <div
                  onMouseLeave={() => setHover(null)}
                  onMouseEnter={() => setHover(currentRating)}
                  size={30}
                  className="cursor-pointer h-8 w-8 center"
                >
                  {currentRating <= (hover || initialRating) ? (
                    <FaStar size={30} />
                  ) : (
                    <FaRegStar size={20} />
                  )}
                </div>
              ) : (
                <div
                  onMouseLeave={() => setHover(null)}
                  onMouseEnter={() => setHover(currentRating)}
                  size={30}
                  className="cursor-pointer h-8 w-8 center"
                >
                  {currentRating <= (hover || initialRating) ? (
                    <FaStar size={30} />
                  ) : (
                    <FaRegStar size={20} />
                  )}
                </div>
              )}
            </label>
          );
        })}
      </div>
      <Button
        onClick={() => {
          updateRating();
          dispatch(closeModal());
        }}
      >
        add your rate
      </Button>
    </div>
  );
}

export default Stars;
