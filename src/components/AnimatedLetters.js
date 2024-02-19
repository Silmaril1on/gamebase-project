import React from "react";
import { motion } from "framer-motion";
import { animatedLetters } from "../framerMotionValues/motionValues";

function AnimatedLetters({ text, className }) {
  const words = text.split("");

  return (
    <motion.div
      variants={animatedLetters}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            variants={animatedLetters}
            className={className}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedLetters;
