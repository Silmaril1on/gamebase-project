import React from "react";
import devs from "../../../database/gameDev";
import AnimatedLetters from "../../../components/AnimatedLetters";
import { motion } from "framer-motion";
import { slideOut } from "../../../framerMotionValues/motionValues";
import { NavLink } from "react-router-dom";

function GameDevs() {
  return (
    <section className="center overflow-hidden flex-col my-10 relative text-black bg-amber-400 py-5">
      <AnimatedLetters
        text="explore game developers"
        className="font-primary text-4xl uppercase"
      />
      <p className="font-light w-full px-4 md:w-1/3 text-center ">
        Within the last decade or so, video games have come to be recognized as
        an art form deserving of critical analysis and praise.
      </p>
      <div className="grid mt-5 grid-cols-2 md:grid-cols-5 grid-rows-2 justify-items-center w-auto gap-1">
        {devs.map((dev) => {
          return (
            <NavLink
              to={dev.link}
              key={dev.id}
              className="h-30 overflow-hidden relative mb-8 w-40 md:w-44 m-2 duration-300 hover:cream-outline outline-none brightness-75 hover:brightness-100 cursor-pointer"
            >
              <motion.div
                variants={slideOut}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full absolute h-full bg-black"
              ></motion.div>
              <img
                className="object-cover w-full h-24"
                src={dev.image}
                alt={dev.name}
              />
              <h1 className="text-center font-bold capitalize ">{dev.name}</h1>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default GameDevs;
