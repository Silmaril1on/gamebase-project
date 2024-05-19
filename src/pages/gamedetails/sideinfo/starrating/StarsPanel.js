import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import CloseButton from "../../../../components/CloseButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/gamesSlice";
import { useLocation } from "react-router-dom";
import Stars from "./Stars";
import { motion } from "framer-motion";
import { fadeOut200 } from "../../../../framerMotionValues/motionValues";
import { addDoc, collection, doc } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";

function StarsPanel() {
  const location = useLocation();
  const details = location.state.game;
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();

  const gameRef = doc(db, "games", `${details.name}`);
  const gameRatingRef = collection(gameRef, "gameRatings");

  const addRating = async (currentRating) => {
    try {
      await addDoc(gameRatingRef, {
        gameRating: rating,
        email: auth.currentUser?.email,
        author: auth.currentUser?.displayName,
        createdAt: new Date().toDateString(),
      });
    } catch (error) {
      console.log(error);
    }
    setRating(currentRating);
    console.log(rating, "inside");
  };

  console.log(rating, "outside");

  return (
    <motion.section
      variants={fadeOut200}
      initial="hidden"
      animate="visible"
      className="w-full h-full fixed top-0 left-0 center bg-black/80 z-20"
    >
      <div className="w-2/4 h-[300px] center flex-col bg-stone-800 relative">
        <div className="absolute right-0 top-0">
          <CloseButton onClick={() => dispatch(closeModal())} />
        </div>
        <div className="absolute -top-16 w-full center">
          <div className="relative">
            <FaStar className="text-amber-400" size={120} />
            {rating ? (
              <span className="text-4xl text-stone-800 absolute top-0 w-full h-full center font-bold">
                {rating}
              </span>
            ) : (
              <span className="text-4xl text-stone-800 absolute top-0 w-full h-full center font-bold">
                ?
              </span>
            )}
          </div>
        </div>
        <h1 className="text-amber-400">Rate This</h1>
        <h1 className="font-bold text-2xl capitalize">{details.name}</h1>
        <Stars rating={rating} setRating={setRating} addRating={addRating} />
      </div>
    </motion.section>
  );
}

export default StarsPanel;
