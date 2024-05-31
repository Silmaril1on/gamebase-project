import React from "react";
import AnimatedLetters from "../../../../components/AnimatedLetters";
import { FaBug } from "react-icons/fa";
import { motion } from "framer-motion";
import { zoomIn200 } from "../../../../framerMotionValues/motionValues";

function BugSubmited() {
  return (
    <div className="w-full h-full center flex-col space-y-5">
      <motion.div variants={zoomIn200} initial="hidden" animate="visible">
        <FaBug size={100} />
      </motion.div>
      <AnimatedLetters text="Bug Reported" className="text-4xl uppercase " />
    </div>
  );
}

export default BugSubmited;
