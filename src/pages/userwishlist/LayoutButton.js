import React from "react";
import { LuLayoutGrid, LuLayoutPanelLeft } from "react-icons/lu";

function LayoutButton({ layout, changeLaout }) {
  return (
    <div className="my-4 *:cursor-pointer flex flex-row">
      {layout ? (
        <LuLayoutGrid className="text-2xl" onClick={changeLaout} />
      ) : (
        <LuLayoutPanelLeft className="text-2xl" onClick={changeLaout} />
      )}
    </div>
  );
}

export default LayoutButton;
