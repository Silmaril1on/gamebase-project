import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";
import ps from "../../../assets/news_6.jpg";

function CardSix() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flexCol md:flexRow md:row-span-1 md:col-span-1 col-span-2"
    >
      <article className="h-auto md:h-full p-6 w-full md:w-2/6 bg-sky-700 flexCol justify-center space-y-5 items-start text-white">
        <h4 className="text-black bg-yellow-300 px-5 uppercase">
          ps subscibtion
        </h4>
        <h1 className="w-full font-secondary uppercase text-3xl">
          january's catalog
        </h1>
        <p className="primary-p md:text-sm">
          PlayStation Plus Game Catalog for January: Resident Evil 2, Tiny
          Tina’s Wonderlands, Hardspace: Shipbreaker and more
        </p>
        <button className="primary-button">view all</button>
      </article>
      <div className="h-full md:h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-cover hover:scale-110 duration-300"
          src={ps}
          alt="gamepass"
        />
      </div>
    </motion.section>
  );
}

export default CardSix;
