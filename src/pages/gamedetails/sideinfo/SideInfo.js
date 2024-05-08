import React from "react";
import { motion } from "framer-motion";
import GameReview from "./GameReview";

function SideInfo({ details }) {
  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="w-3/12 center flex-col"
    >
      <GameReview details={details} />
    </motion.section>
  );
}

export default SideInfo;
