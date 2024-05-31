import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import CloseButton from "../../../../components/CloseButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/gamesSlice";
import { useLocation } from "react-router-dom";
import Stars from "./Stars";
import { motion } from "framer-motion";
import { fadeOut200 } from "../../../../framerMotionValues/motionValues";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";

function StarsPanel() {
  const dispatch = useDispatch();
  const location = useLocation();
  const details = location.state.game;
  const currentUser = auth.currentUser?.displayName;
  const [myRating, setMyRating] = useState([]);
  const [initialRating, setInitialRating] = useState(0);
  const gameRef = collection(db, "games");
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
  }, [gameRef]);

  return (
    <motion.section
      variants={fadeOut200}
      initial="hidden"
      animate="visible"
      className="w-full h-full fixed top-0 left-0 center bg-black/80 z-20"
    >
      <div className="w-full xl:w-2/4 h-[300px] center flex-col bg-stone-800 relative">
        <div className="absolute right-0 top-0">
          <CloseButton onClick={() => dispatch(closeModal())} />
        </div>
        <div className="absolute -top-16 w-full center">
          <div className="relative">
            <FaStar className="text-amber-400" size={120} />
            <div className="*:text-4xl text-stone-800 absolute top-0 w-full h-full center font-bold">
              {userStar ? (
                <span className="">{userStar}</span>
              ) : (
                <span className="">{initialRating}</span>
              )}
            </div>
          </div>
        </div>
        {userStar ? (
          <h1 className="text-amber-400">Your Rating</h1>
        ) : (
          <h1 className="text-amber-400">Rate This</h1>
        )}
        <h1 className="font-bold text-2xl capitalize">{details?.name}</h1>
        <Stars
          details={details}
          userStar={userStar}
          setInitialRating={setInitialRating}
          initialRating={initialRating}
          dispatch={dispatch}
        />
      </div>
    </motion.section>
  );
}

export default StarsPanel;
