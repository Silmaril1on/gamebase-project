import React from "react";
import { TfiLayoutGrid3Alt, TfiLayoutColumn2Alt } from "react-icons/tfi";

function LayoutButtons({ setLayout }) {
  return (
    <section className="pl-5">
      <div className="flex  *:cursor-pointer flex-row h-9 w-full space-x-2 *:text-2xl items-center hover:*:text-stone-500 *:duration-300">
        <TfiLayoutColumn2Alt onClick={() => setLayout(true)} />
        <TfiLayoutGrid3Alt onClick={() => setLayout(false)} />
      </div>
      <div className="">
        <h1 className="text-xs">Change Layout</h1>
      </div>
    </section>
  );
}

export default LayoutButtons;
