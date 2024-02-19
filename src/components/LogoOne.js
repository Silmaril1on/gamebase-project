import React from "react";
import { motion } from "framer-motion";
import { loadingPath } from "../framerMotionValues/motionValues";

function LogoOne() {
  return (
    <motion.svg
      variants={loadingPath}
      initial="hidden"
      animate="visible"
      id="Amazon_Luna_48"
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
    >
      <rect width="48" height="48" stroke="none" fill="red" opacity="0" />
      <g transform="matrix(1.83 0 0 1.83 24 24)">
        <g transform="matrix(1 0 0 1 0 0)">
          <motion.path
            variants={loadingPath}
            stroke="url(#gradient_blue)"
            strokeWidth={0.5}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            transform=" translate(-12, -12)"
            d="M 12 23.5 C 18.3513 23.5 23.5 18.3513 23.5 12 C 23.5 5.64873 18.3513 0.5 12 0.5 C 5.64873 0.5 0.5 5.64873 0.5 12 C 0.5 18.3513 5.64873 23.5 12 23.5 Z"
          />
        </g>
        <g transform="matrix(1 0 0 1 -2.75 -1.75)">
          <motion.path
            variants={loadingPath}
            stroke="url(#gradient_blue)"
            strokeWidth={0.5}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            transform=" translate(-9.25, -10.25)"
            d="M 9.25 11.25 C 9.80228 11.25 10.25 10.8023 10.25 10.25 C 10.25 9.69772 9.80228 9.25 9.25 9.25 C 8.69772 9.25 8.25 9.69772 8.25 10.25 C 8.25 10.8023 8.69772 11.25 9.25 11.44 Z"
          />
        </g>
        <g transform="matrix(1 0 0 1 0 -0.11)">
          <motion.path
            variants={loadingPath}
            stroke="url(#gradient_blue)"
            strokeWidth={0.5}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            transform=" translate(-12, -11.89)"
            d="M 20 13 C 19.5021 11.0754 18.8119 9.20563 17.94 7.419 C 17.8125 7.14452 17.6092 6.91219 17.3541 6.74938 C 17.099 6.58656 16.8027 6.50004 16.5 6.5 L 7.50002 6.5 C 7.19738 6.50004 6.90104 6.58656 6.64592 6.74938 C 6.3908 6.91219 6.18752 7.14452 6.06002 7.419 C 5.18813 9.20563 4.49799 11.0754 4.00002 13 C 3.70702 14.468 4.79202 15.936 5.73802 16.9 C 5.87806 17.0421 6.04909 17.1499 6.23772 17.2149 C 6.42634 17.2799 6.62746 17.3004 6.82531 17.2747 C 7.02317 17.249 7.2124 17.1779 7.3782 17.0669 C 7.544 16.956 7.68187 16.8081 7.78102 16.635 L 8.68102 15.058 C 8.77774 14.8891 8.91736 14.7487 9.08576 14.651 C 9.25416 14.5534 9.44537 14.502 9.64002 14.502 L 14.358 14.502 C 14.5527 14.502 14.7439 14.5534 14.9123 14.651 C 15.0807 14.7487 15.2203 14.8891 15.317 15.058 L 16.217 16.635 C 16.3162 16.8081 16.454 16.956 16.6198 17.0669 C 16.7856 17.1779 16.9749 17.249 17.1727 17.2747 C 17.3706 17.3004 17.5717 17.2799 17.7603 17.2149 C 17.949 17.1499 18.12 17.0421 18.26 16.9 C 19.208 15.936 20.293 14.468 20 13 Z"
          />
        </g>
        <g transform="matrix(1 0 0 1 3.25 -1.75)">
          <motion.path
            stroke="url(#gradient_blue)"
            strokeWidth={0.5}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeLinejoin="round"
            strokeMiterlimit={4}
            fill="none"
            fillRule="nonzero"
            opacity={1}
            transform=" translate(-15.25, -10.25)"
            d="M 15.25 11.25 C 15.8023 11.25 16.25 10.8023 16.25 10.25 C 16.25 9.69772 15.8023 9.25 15.25 9.25 C 14.6977 9.25 14.25 9.69772 14.25 10.25 C 14.25 10.8023 14.6977 11.25 15.25 11.25 Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient id="gradient_blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(15, 86, 201, 0.89)" />
          <stop offset="50.1%" stopColor="rgba(59, 131, 246, 0.89)" />
          <stop offset="100%" stopColor="rgba(15, 86, 201, 0.89)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default LogoOne;
