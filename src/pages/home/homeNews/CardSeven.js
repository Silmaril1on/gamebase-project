import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../../framerMotionValues/motionValues";
import box from "../../../assets/news_7.jpg";

function CardSeven() {
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="col-span-2 row-span-1 flexCol md:flexRow"
    >
      <div className="w-full md:w-2/3 h-auto">
        <img className="w-full h-full" src={box} alt="" />
      </div>
      <article className="flexCol p-2 bg-stone-200 text-black space-y-6 items-start justify-center">
        <h1 className="font-secondary text-4xl font-bold uppercase">
          xbox series s - starter bundle
        </h1>
        <p>
          Get an Xbox Series S and 100s of games with 3mo. of Game Pass Ultimate
        </p>
        <button className="primary-button">learn more</button>
      </article>
    </motion.section>
  );
}

export default CardSeven;
