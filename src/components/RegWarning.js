import React from "react";
import BorderSvg from "./BorderSvg";
import LogoTwo from "./LogoTwo";
import AnimatedLetters from "./AnimatedLetters";
import { motion } from "framer-motion";
import { fadeOut700 } from "../framerMotionValues/motionValues";
import CloseButton from "./CloseButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/gamesSlice";

function RegWarning() {
  const dispatch = useDispatch();

  return (
    <motion.section
      variants={fadeOut700}
      initial="hidden"
      animate="visible"
      className="fixed center w-full h-full top-0 z-4 bg-100 left-0 "
    >
      <div className="w-10/12 md:w-2/4 h-64 z-10 bg-black relative flex-col center">
        <CloseButton onClick={() => dispatch(closeModal())} />
        <div className="w-20 h-20">
          <LogoTwo />
        </div>
        <AnimatedLetters
          text="Please, LOGIN"
          className="font-primary text-2xl tracking-wider"
        />
        <BorderSvg />
      </div>
    </motion.section>
  );
}

export default RegWarning;
