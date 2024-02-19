import React from "react";
import { TfiLayoutGrid3Alt, TfiLayoutColumn2Alt } from "react-icons/tfi";

function LayoutButtons({ setLayout }) {
  return (
    <div className="flex my-2 *:cursor-pointer flex-row h-9 w-full pl-5 space-x-2 *:text-2xl items-center ">
      <TfiLayoutColumn2Alt onClick={() => setLayout(true)} />
      <TfiLayoutGrid3Alt onClick={() => setLayout(false)} />
    </div>
  );
}

export default LayoutButtons;
