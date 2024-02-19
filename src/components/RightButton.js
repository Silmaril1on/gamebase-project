import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function RightButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="primary-button relative z-5 opacity-50 hover:opacity-100 duration-300"
    >
      <FaAngleRight />
    </button>
  );
}

export default RightButton;
