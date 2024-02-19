import React from "react";
import starfield from "../../../assets/news_9.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardNine() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:row-span-2 row-span-3 flex col-span-2 md:col-span-1 relative items-end"
    >
      <div className="absolute w-full h-full z-0 top-0 left-0">
        <img className="w-full h-full align-top" src={starfield} alt="nba" />
      </div>
      <article className="h-full mt-40 md:mt-0 pl-10 pb-10 w-full md:w-2/4 relative z-2 flexCol justify-end space-y-5 items-start">
        <h4 className="text-black bg-yellow-300 text-xs md:-text-lg px-5 uppercase">
          xbox series X|S / PC / Cloud
        </h4>
        <h1 className="text-5xl uppercase font-secondary">starfield</h1>
        <p className="primary-p text-sm">"A cinematic masterwork" - Esquire</p>
        <button className="primary-button w-36">get it now</button>
      </article>
    </motion.section>
  );
}

export default CardNine;
