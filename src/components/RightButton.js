import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import BorderSvg from "./BorderSvg";

function RightButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" relative bg-black/60 hover:bg-black/70 center w-10 h-10 z-5 opacity-80 hover:opacity-100 duration-300"
    >
      <BorderSvg />
      <FaAngleRight className="text-2xl text-cream" />
    </button>
  );
}

export default RightButton;
