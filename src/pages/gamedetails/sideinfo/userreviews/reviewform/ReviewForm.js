import React from "react";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../../../../framerMotionValues/motionValues";
import ReviewPanel from "./ReviewPanel";

function ReviewForm({ setGameReviewForm }) {
  return (
    <motion.div
      variants={fadeOut700}
      initial="hidden"
      animate="visible"
      className="w-full bg-cream/30 fixed flex top-0 left-0 z-20 h-screen justify-end py-10 xl:pr-5 px-5 backdrop-blur-sm"
    >
      <ReviewPanel setGameReviewForm={setGameReviewForm} />
    </motion.div>
  );
}

export default ReviewForm;
