import React from "react";
import logo from "../../../assets/news_2.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardOne() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex md:row-span-2 md:col-span-1 col-span-2 row-span-1 relative items-end"
    >
      <div className="absolute w-full h-full z-0 top-0 left-0">
        <img className="w-full h-full align-top" src={logo} alt="nba" />
      </div>
      <article className="h-full pl-10 pb-10 w-2/4 relative z-2 flexCol justify-end space-y-5 items-start">
        <h4 className="text-black bg-yellow-300  px-5 uppercase">new season</h4>
        <h1 className="text-5xl uppercase font-secondary">nba 2k24</h1>
        <p className="primary-p text-sm">seasong 4 is live now</p>
        <button className="primary-button w-36">get it now</button>
      </article>
    </motion.section>
  );
}

export default CardOne;
