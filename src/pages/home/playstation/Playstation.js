import React from "react";
import Ps from "../../../components/Ps";
import Button from "../../../components/Button";
import back from "../../../assets/content.webp";
import { motion } from "framer-motion";
import { slideright } from "../../../framerMotionValues/motionValues";

function Playstation() {
  return (
    <section className="h-64 md:h-full relative my-20">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={back} alt="ps" />
      </div>
      <motion.article
        variants={slideright}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flexCol items-start pl-3 md:pl-10 absolute top-0 w-full h-full md:w-2/4 font-secondary uppercase"
      >
        <div className="w-20 md:h-44 h-20 md:w-44">
          <Ps />
        </div>
        <h1 className="font-light text-2xl md:text-4xl ">this month</h1>
        <h1 className="font-bold text-3xl md:text-5xl">on playstation</h1>
        <p className="primary-p text-stone-300 my-2 md:my-5 normal-case font-light">
          Check out this month's biggest releases along with dedicated features,
          guides and more.
        </p>
        <Button> find out more</Button>
      </motion.article>
    </section>
  );
}

export default Playstation;
