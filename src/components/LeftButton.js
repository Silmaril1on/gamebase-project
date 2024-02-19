import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

function LeftButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="primary-button relative z-5 opacity-50 hover:opacity-100 duration-300"
    >
      <FaAngleLeft />
    </button>
  );
}

export default LeftButton;
