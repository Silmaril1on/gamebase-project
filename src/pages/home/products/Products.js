import React from "react";
import consoles from "../../../assets/consoles.jpeg";
import accessories from "../../../assets/accessories.jpg";
import games from "../../../assets/games.jpeg";
import {
  PiGameControllerLight,
  PiHeadsetThin,
  PiComputerTowerThin,
} from "react-icons/pi";
import AnimatedLetters from "../../../components/AnimatedLetters";
import { motion } from "framer-motion";
import { zoomIn } from "../../../framerMotionValues/motionValues";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "consoles",
    image: consoles,
    icon: <PiComputerTowerThin />,
    link: "consoles",
  },

  {
    name: "games",
    image: games,
    icon: <PiGameControllerLight />,
    link: "games",
  },
  {
    name: "accessories",
    image: accessories,
    icon: <PiHeadsetThin />,
    link: "accessories",
  },
];

function Products() {
  return (
    <section className="my-5 flexCol items-center space-y-4">
      <div className=" flexCol items-center">
        <AnimatedLetters
          text="shop by product"
          className="text-4xl text-cream uppercase font-primary"
        />
        <p className="primary-p text-stone-200 text-center">
          Choose your wished product
        </p>
      </div>
      <motion.div
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flexCol md:flexRow w-full items-center justify-center space-y-5 md:space-y-0 md:space-x-10"
      >
        {data.map((item, index) => {
          return (
            <NavLink to={item.link} key={index}>
              <motion.div
                variants={zoomIn}
                className="cursor-pointer h-50 w-64 group outline-none hover:cream-outline duration-300"
              >
                <div className=" h-44 w-full relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                    src={item.image}
                    alt="consoles"
                  />
                  <div className="absolute flex items-center justify-center w-full h-full bg-300 top-0 left-0">
                    <span className="text-6xl">{item.icon}</span>
                  </div>
                </div>
                <h1 className="font-primary text-cream my-2 tracking-wide text-xl uppercase text-center">
                  {item.name}
                </h1>
              </motion.div>
            </NavLink>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Products;
