import React from "react";
import homeVideoContent from "../../../database/homeVideoContent";
import AnimatedLetters from "../../../components/AnimatedLetters";
import { motion } from "framer-motion";
import { fadeOut200 } from "../../../framerMotionValues/motionValues";

function VideoThumbNail({ setIndex, index }) {
  const goToSlice = (index) => {
    setIndex(index);
  };

  return (
    <div className="flexCol items-center pt-3">
      <AnimatedLetters
        text="recent releases"
        className="font-primary text-3xl text-cream mt-2 uppercase"
      />
      <motion.section
        variants={fadeOut200}
        initial="hidden"
        animate="visible"
        className="flexRow items-center justify-center h-24 pb-4 w-full"
      >
        {homeVideoContent.map((item) => {
          return (
            <motion.div
              variants={fadeOut200}
              onClick={() => goToSlice(item.id)}
              key={item.id}
              className={
                index === item.id
                  ? "w-32 h-22 m-2 rounded-xl cursor-pointer duration-300 blue-outline"
                  : "w-28 h-18 m-2 brightness-50 cursor-pointer"
              }
            >
              <img
                className="w-full h-full rounded-xl object-cover align-top"
                src={item.thumb}
                alt="thumbnail"
              />
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}

export default VideoThumbNail;
