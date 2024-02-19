import React from "react";
import logo from "../../../assets/news_1.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardTwo() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flexCol md:flexRow md:row-span-1 md:col-span-1 col-span-2 row-span-1"
    >
      <article className="h-auto md:h-full p-6 w-full md:w-2/4 bg-green-700 flexCol md:justify-center space-y-3 md:space-y-5 items-start text-white">
        <h4 className="text-black bg-yellow-300 px-5 text-xs md:text-md uppercase">
          join now for $1
        </h4>
        <h1 className="w-full font-secondary uppercase text-xl md:text-3xl">
          discover your next favorite game
        </h1>
        <p className="primary-p md:text-sm">
          Enjoy hundreds of high-quality games, plus online console multiplayer
          and EA Play, all for one low monthly price.
        </p>
        <button className="primary-button">join now </button>
      </article>
      <div className="h-full w-full md:w-2/4 overflow-hidden">
        <img
          className="h-full w-full md:object-cover hover:scale-110 duration-300"
          src={logo}
          alt="gamepass"
        />
      </div>
    </motion.section>
  );
}

export default CardTwo;
