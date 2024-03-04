import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SideLinks from "./SideLinks";

function SideButton() {
  const [sideNavigation, setSideNavigation] = useState(false);

  return (
    <div className="block md:hidden">
      <HiOutlineMenuAlt2
        onClick={() => setSideNavigation(true)}
        className="text-white cursor-pointer"
      />
      {sideNavigation && <SideLinks setSideNavigation={setSideNavigation} />}
    </div>
  );
}

export default SideButton;
