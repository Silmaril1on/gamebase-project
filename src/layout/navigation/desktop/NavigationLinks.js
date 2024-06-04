import React from "react";
import navigationData from "../../../database/navigationData";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerRight } from "../../../framerMotionValues/motionValues";

function NavigationLinks() {
  return (
    <nav className="text-white hidden md:flex">
      <motion.section
        variants={staggerRight}
        initial="hidden"
        animate="visible"
        className="flexRow items-center w-full pl-24 my-3"
      >
        {navigationData.map((link) => {
          return (
            <NavLink key={link.id} to={link.link}>
              <motion.h1 variants={staggerRight} className="skew-style mr-2">
                {link.name}
              </motion.h1>
            </NavLink>
          );
        })}
      </motion.section>
    </nav>
  );
}

export default NavigationLinks;
