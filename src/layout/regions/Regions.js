import React, { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import RegionsList from "./RegionsList";
import regionsData from "../../database/regions";

function Regions() {
  const [isOpen, setIsOpen] = useState(false);
  const [index] = useState(0);

  const arr = regionsData.map((item) => item.locations);
  const array = arr.flat();

  return (
    <section className="text-cream relative z-10 flex items-center w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-row items-center ml-2"
      >
        <MdOutlineLanguage className="text-lg" />
        <h1 className="font-tetriary text-sm pl-1">{array[index].name}</h1>
      </button>
      {isOpen && <RegionsList setIsOpen={setIsOpen} />}
    </section>
  );
}

export default Regions;
