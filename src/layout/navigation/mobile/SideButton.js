import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function SideButton() {
  return (
    <div className="block md:hidden">
      <HiOutlineMenuAlt2 className="text-white" />
    </div>
  );
}

export default SideButton;
