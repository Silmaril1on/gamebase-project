import React, { useState } from "react";
import consolesSlideShowData from "../../../database/consolesSlideShowData";
import { motion, AnimatePresence } from "framer-motion";
import { slideShow } from "../../../framerMotionValues/motionValues";
import ConsolesThumbNail from "./ConsolesThumbNail";

function ConsolesSlideShow() {
  const [index, setIndex] = useState(0);
  const [direction] = useState(0);
  const [consoles] = useState(consolesSlideShowData);

  return (
    <main className="flexCol bg-black">
      <section className="relative h-500 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={slideShow}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={consoles[index].image}
            custom={direction}
            className="absolute h-full w-full flexCol md:flexRow"
          >
            <div className="w-full h-full center bg-white">
              <img
                className="w-full h-full object-cover"
                src={consoles[index].image}
                alt="consoles"
              />
            </div>
            <article className="pl-2 md:pl-5 pt-10 w-full md:w-2/4 bg-white text-black flexCol justify-between">
              <div className="flexCol">
                <h1 className="text-xl md:text-3xl capitalize font-bold mb-3">
                  {consoles[index].name}
                </h1>
                <p className="text-blue-400 pr-5 text-xs md:text-base">
                  {consoles[index].desc}
                </p>
                <h1 className="text-xl md:text-6xl mt-5 font-light">
                  {consoles[index].info}
                </h1>
              </div>
              <div className="relative z-5 mt-5 mb-10 space-x-5">
                <button className="primary-button">find out more</button>
                <button className="primary-button bg-red-600">
                  add to cart
                </button>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </section>
      <ConsolesThumbNail setIndex={setIndex} index={index} />
    </main>
  );
}

export default ConsolesSlideShow;
