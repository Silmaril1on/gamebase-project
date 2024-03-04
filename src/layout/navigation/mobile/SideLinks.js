import React from "react";
import CloseButton from "../../../components/CloseButton";
import navData from "../../../database/navigationData";
import { motion } from "framer-motion";
import { zoomIn } from "../../../framerMotionValues/motionValues";
import { NavLink } from "react-router-dom";
import Socials from "../../../components/Socials";

function SideLinks({ setSideNavigation }) {
  return (
    <aside className="fixed w-full h-screen bg-black left-0 top-0 flex-col  center justify-between py-5">
      <CloseButton onClick={() => setSideNavigation(false)} />
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="w-full center flex-col space-y-4"
      >
        {navData.map((item, index) => {
          return (
            <motion.div
              onClick={() => setSideNavigation(false)}
              variants={zoomIn}
              key={index}
            >
              <NavLink to={item.link}>
                <h1 className="text-cream font-primary font-bold uppercase text-3xl cursor-pointer">
                  {item.name}
                </h1>
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>
      <Socials />
    </aside>
  );
}

export default SideLinks;
