import React from "react";
import { motion } from "framer-motion";
import { slideright } from "../../../framerMotionValues/motionValues";

function GameInfo({ details }) {
  return (
    <motion.article
      variants={slideright}
      initial="hidden"
      animate="visible"
      className="absolute font-secondary top-10 xl:top-[15%] w-full pl-[5%]"
    >
      <h1 className="text-3xl md:text-4xl uppercase">{details.name}</h1>
      <h1 className="uppercase md:text-xl">{details.developer}</h1>
      <div className="flex flex-row space-x-2 capitalize text-sm">
        <h1>{details.category[0]}</h1>
        <h1>{details.category[1]}</h1>
        <h1>{details.category[2]}</h1>
      </div>
      <h1 className="text-xl">{details.year}</h1>
      <div className="flex flex-row space-x-2 *:w-4">
        {details.platforms.ps ? (
          <img src={details.platforms.ps} alt="platform" />
        ) : (
          ""
        )}
        {details.platforms.pc ? (
          <img src={details.platforms.pc} alt="platform" />
        ) : (
          ""
        )}
        {details.platforms.xbox ? (
          <img src={details.platforms.xbox} alt="platform" />
        ) : (
          ""
        )}
      </div>
      <div className="w-44 h-64 mt-2">
        <img
          className="w-full h-full object-cover"
          src={details.image}
          alt={details.name}
        />
      </div>
      <p className="w-full xl:w-2/4 text-xs md:text-sm mt-2">{details.info}</p>
    </motion.article>
  );
}

export default GameInfo;
