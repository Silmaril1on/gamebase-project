import React from "react";
import logo from "../../../assets/news_3.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardFour() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:row-span-2 md:col-span-1 col-span-2 row-span-1 relative items-end"
    >
      <div className="absolute w-full h-full z-0 top-0 left-0">
        <img className="w-full h-full align-top" src={logo} alt="nba" />
      </div>
      <article className="h-full pl-10 pb-10 w-full relative z-2 flexCol justify-end space-y-5 items-start">
        <h4 className="text-black bg-yellow-300  px-5 uppercase">
          brand new controller
        </h4>
        <h1 className="text-5xl text-black font-bold uppercase font-secondary">
          refine your game
        </h1>
        <p className="primary-p text-lg font-normal text-black">
          Shine with Xbox Wireless Controller – Gold Shadow Special Edition
        </p>
        <button className="primary-button">learn more</button>
      </article>
    </motion.section>
  );
}

export default CardFour;
