import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openStarPanel } from "../../../../features/gamesSlice";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { auth, db } from "../../../../firebase/firebase";

function RateHeader() {
  const dispatch = useDispatch();
  const location = useLocation();
  const details = location.state.game;
  const { userReg, userRating } = useSelector((store) => store.user);
  const [userGameRating, setUserGameRating] = useState([]);
  const currentUser = auth.currentUser?.displayName;
  const currentUserRating = userGameRating.find(
    (name) => name.author === currentUser
  );

  const currentRating = userGameRating.find(
    (name) => name.author === currentUser
  );

  const gameRef = doc(db, "games", `${details.name}`);
  const gameRatingRef = collection(gameRef, "gameRatings");

  const addRating = async () => {
    try {
      await addDoc(gameRatingRef, {
        gameRating: userRating,
        email: auth.currentUser?.email,
        author: auth.currentUser?.displayName,
        createdAt: new Date().toDateString(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserRating = async () => {
      try {
        const data = await getDocs(gameRatingRef);
        const userRating = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserGameRating(userRating);
      } catch (error) {}
    };
    getUserRating();
  }, []);

  // console.log(userRating);
  console.log(userGameRating);
  // console.log(currentUserRating, "///////");

  return (
    <div
      onClick={() => {
        if (userReg?.email) {
          dispatch(openStarPanel());
          if (currentUser === currentRating?.author) {
            console.log("not launched");
          } else {
            addRating();
          }
        } else {
          dispatch(openModal());
        }
      }}
      className="flex-col flex cursor-pointer"
    >
      <div className="center space-x-2 flex-row">
        <FaRegStar className="text-2xl text-amber-400" />
        <h1 className="text-xl">Your Rating</h1>
      </div>
      <div className="mt-2 pl-1 text-2xl hover:bg-stone-800 duration-300">
        <div>
          <span className="text-white font-bold">
            {currentUserRating?.gameRating}
          </span>
          <span> / 10</span>
        </div>
      </div>
    </div>
  );
}

export default RateHeader;
