import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openStarPanel } from "../../../../features/gamesSlice";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";

function RateHeader() {
  const dispatch = useDispatch();
  const location = useLocation();
  const details = location.state.game;
  const [myRating, setMyRating] = useState([]);
  const { userReg } = useSelector((store) => store.user);
  const gameRef = collection(db, "games");
  const currentUser = auth.currentUser?.displayName;
  const currentGame = myRating.filter((item) => item.id === details.name);
  const gameRatings = currentGame[0]?.ratings;
  const rating = gameRatings?.find((item) => item.author === currentUser);
  const userStar = rating?.gameRating;

  useEffect(() => {
    const getUserRating = async () => {
      const data = await getDocs(gameRef);
      const userRating = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMyRating(userRating);
    };
    getUserRating();
  }, []);

  return (
    <div
      onClick={() => {
        if (userReg?.email) {
          dispatch(openStarPanel());
        } else {
          dispatch(openModal());
        }
      }}
      className="flex-row xl:flex-col flex cursor-pointer"
    >
      <div className="center space-x-2 flex-row">
        <FaRegStar className="text-2xl text-amber-400" />
        <h1 className="text-xl">Your Rating</h1>
      </div>
      <div className="mt-2 pl-1 text-2xl hover:bg-stone-800 duration-300 ml-8 xl:ml-0">
        <div>
          <span className="text-white font-bold">{userStar}</span>
          <span> / 10</span>
        </div>
      </div>
    </div>
  );
}

export default RateHeader;
