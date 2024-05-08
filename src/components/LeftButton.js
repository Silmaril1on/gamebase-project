import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import BorderSvg from "./BorderSvg";

function LeftButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" relative bg-black/60 hover:bg-black/70 center w-10 h-10 z-5 opacity-80 hover:opacity-100 duration-300"
    >
      <BorderSvg />
      <FaAngleLeft className="text-2xl text-cream" />
    </button>
  );
}

export default LeftButton;
