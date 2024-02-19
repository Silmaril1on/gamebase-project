import React from "react";
import gow from "../../../assets/news_8.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardEight() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:row-span-2 flex col-span-2 md:col-span-1 relative items-end"
    >
      <div className="absolute w-full h-full z-0 top-0 left-0">
        <img
          className="w-full h-full align-top object-cover"
          src={gow}
          alt="nba"
        />
      </div>
      <article className="h-full mt-16 md:mt-0 pl-10 pb-10 w-2/4 relative z-2 flexCol justify-end space-y-5 items-start">
        <h4 className="text-black bg-yellow-300  px-5 uppercase">FREE DLC</h4>
        <h1 className="text-2xl md:text-5xl uppercase font-secondary">
          god of war: ragnarok
        </h1>
        <p className="primary-p text-sm">
          Walk throught valhalla cicles, test your combat skills and master your
          faith
        </p>
        <button className="primary-button w-36">get it now</button>
      </article>
    </motion.section>
  );
}

export default CardEight;
