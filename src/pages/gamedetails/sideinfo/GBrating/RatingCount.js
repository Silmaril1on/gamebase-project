import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase/firebase";
import { FaUser } from "react-icons/fa";

function RatingCount({ details }) {
  const [ratingsData, setRatingsData] = useState([]);
  const ratingsRef = collection(db, "games");
  const [currentGameRating, setCurrentGameRating] = useState(null);
  const currentGame = details?.name;
  const filt = ratingsData.find((item) => item.id === currentGame);
  const filteredRatings = filt?.ratings;
  const gameRating = filteredRatings?.map((item) => item.gameRating);
  const gameRatingRef = doc(db, "average-ratings", `${details.name}`);

  // get all games rating data
  useEffect(() => {
    const getRatingData = async () => {
      const data = await getDocs(ratingsRef);
      const ratings = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRatingsData(ratings);
    };
    getRatingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // add average rating data to specific game
  useEffect(() => {
    const addAverageRating = async () => {
      await setDoc(gameRatingRef, {
        averageRating: currentGameRating,
      });
    };
    addAverageRating();
  }, [currentGameRating, gameRatingRef]);

  //calculate average rating for games
  useEffect(() => {
    const findAverage = () => {
      let sum = 0;
      for (let i = 0; i < gameRating?.length; i++) {
        sum += gameRating[i];
      }
      let average = sum / gameRating?.length;
      setCurrentGameRating(average);
      return average;
    };
    findAverage();
  }, [gameRating]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  return (
    <div className="w-full mt-2 hover:bg-stone-800 duration-300 py-1 cursor-pointer">
      <div className="text-2xl flex flex-row">
        <div>
          <span className="font-bold text-white">
            {currentGameRating ? (
              <span>
                {truncateString(currentGameRating.toLocaleString(), 3)}
              </span>
            ) : (
              0
            )}
          </span>
          / 10
        </div>
        <div className="text-xs  ml-2 pt-3 flex flex-row items-center">
          <FaUser size={10} className="text-amber-400 mr-1" />
          {gameRating?.length}
        </div>
      </div>
    </div>
  );
}

export default RatingCount;
