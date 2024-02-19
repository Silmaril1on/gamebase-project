import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";
import smite from "../../../assets/news_5.jpg";

function CardFive() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flexCol md:flexRow md:row-span-1 md:col-span-1 col-span-2 row-span-1"
    >
      <article className="h-auto md:h-full p-6 w-full md:w-2/4 bg-stone-700 flexCol justify-center space-y-5 items-start text-white">
        <h1 className="w-full  font-secondary uppercase text-3xl">
          smite 2 is coming to playstation 5
        </h1>
        <p className="primary-p text-stone-200 font-normal md:text-sm">
          First look at the godly MOBA’s upcoming Unreal 5-powered sequel plus
          info on open Alpha testing registration.
        </p>
        <button className="primary-button">join now </button>
      </article>
      <div className="h-full w-full md:w-2/4 overflow-hidden">
        <img
          className="h-full w-full object-cover hover:scale-110 duration-300"
          src={smite}
          alt="gamepass"
        />
      </div>
    </motion.section>
  );
}

export default CardFive;
