import React from "react";
import { IoMdClose } from "react-icons/io";

function CloseButton({ onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer relative z-5 w-8 h-8 m-2">
      <IoMdClose className="w-full h-full hover:scale-75 text-cream duration-150" />
    </div>
  );
}

export default CloseButton;
