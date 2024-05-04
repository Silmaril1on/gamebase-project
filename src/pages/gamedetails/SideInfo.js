import React from "react";
import { motion } from "framer-motion";

function SideInfo() {
  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="w-3/12"
    >
      SideInfo
    </motion.section>
  );
}

export default SideInfo;
