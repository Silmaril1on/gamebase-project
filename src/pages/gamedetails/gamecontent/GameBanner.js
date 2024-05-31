import React from "react";
import { motion } from "framer-motion";
import { fadeOut200 } from "../../../framerMotionValues/motionValues";

function GameBanner({ details }) {
  const video = details.banner.includes("mp4");

  return (
    <motion.div
      variants={fadeOut200}
      initial="hidden"
      animate="visible"
      className="w-full h-[600px] overflow-hidden relative "
    >
      <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-r from-black from-10% xl:from-1%"></div>
      {video ? (
        <video autoPlay={true} muted loop={true}>
          <source src={details.banner} type="video/mp4" />
        </video>
      ) : (
        <img
          className="w-full h-full object-cover"
          src={details.banner}
          alt="game_banner"
        />
      )}
    </motion.div>
  );
}

export default GameBanner;
