import React from "react";
import { motion } from "framer-motion";
import { slideright } from "../../framerMotionValues/motionValues";

function GameDetails({ details }) {
  console.log(details);
  return (
    <section className="relative w-9/12">
      <div className="w-full h-[600px] overflow-hidden relative">
        <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-r from-black from-1%"></div>
        <img
          className="w-full h-full object-cover"
          src={details.banner}
          alt="game_banner"
        />
      </div>

      <motion.article
        variants={slideright}
        initial="hidden"
        animate="visible"
        className="absolute font-secondary top-[20%] w-full pl-[5%]"
      >
        <h1 className="text-4xl uppercase">{details.name}</h1>
        <h1 className="uppercase text-xl">{details.developer}</h1>
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
        <p className="w-2/4 text-sm mt-2">{details.info}</p>
      </motion.article>
    </section>
  );
}

export default GameDetails;
