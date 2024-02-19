import React from "react";
import { motion } from "framer-motion";
import { animatePath } from "../framerMotionValues/motionValues";

function LogoTwo() {
  return (
    <motion.svg
      variants={animatePath}
      initial="hidden"
      animate="visible"
      id="Vortex"
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
    >
      <rect width="48" height="48" stroke="none" fill="#000000" opacity="0" />
      <g transform="matrix(1.83 0 0 1.83 24 24)">
        <g transform="matrix(1 0 0 1 6.5 -2.75)">
          <motion.polygon
            variants={animatePath}
            stroke="url(#gradient)"
            strokeWidth={1}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            points="-5,1.25 -1.5,7.25 5,-3.75 4,-7.25 0.5,-7.25 -5,1.25 "
          />
        </g>
        <g transform="matrix(1 0 0 1 -4.25 -7.25)">
          <motion.path
            variants={animatePath}
            stroke="url(#gradient)"
            strokeWidth={1}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            transform="translate(-7.75, -4.75)"
            d="M 11.5 7.5 L 15 2 L 2.5 2 C 2.5 2.041 0.5 5 0.5 5 L 2 7.5 Z"
          />
        </g>
        <g transform="matrix(1 0 0 1 -2.5 4.5)">
          <motion.polygon
            variants={animatePath}
            stroke="url(#gradient)"
            strokeWidth={1}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            points="1,-5.5 -6,-5.5 0.5,5.5 4.5,5.5 6,3 1,-5.5 "
          />
        </g>
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcf5dff6" />
          <stop offset="50.1%" stopColor="#fcf5df86" />
          <stop offset="100%" stopColor="#fcf5dff6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default LogoTwo;
