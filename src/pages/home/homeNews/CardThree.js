import React from "react";
import logo from "../../../assets/news_4.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";

function CardThree() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flexCol md:flexRow md:row-span-1 md:col-span-1 col-span-2 row-span-1"
    >
      <article className="h-autot md:h-full p-6 w-full md:w-2/4 bg-sky-900 flexCol justify-center space-y-5 items-start text-white">
        <h1 className="w-full font-secondary uppercase text-5xl">
          baldur's gate 3
        </h1>
        <p className="primary-p md:text-sm">
          The fate of Faerûn rests in your hands
        </p>
        <button className="primary-button">get it now</button>
      </article>
      <div className="h-full w-full md:w-2/4 overflow-hidden">
        <img
          className="h-full w-full object-cover hover:scale-110 duration-300"
          src={logo}
          alt="gamepass"
        />
      </div>
    </motion.section>
  );
}

export default CardThree;
