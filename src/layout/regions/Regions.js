import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import RegionsList from "./RegionsList";
import { openModal } from "../../features/modal";
import regionsData from "../../database/regions";

function Regions() {
  const { isOpen, index } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const arr = regionsData.map((item) => item.locations);
  const array = arr.flat();

  return (
    <section className="text-cream relative z-10 flex items-center w-full">
      <button
        onClick={() => dispatch(openModal())}
        className="flex flex-row items-center ml-2"
      >
        <MdOutlineLanguage className="text-lg" />
        <h1 className="font-tetriary text-sm pl-1">{array[index].name}</h1>
      </button>
      {isOpen && <RegionsList />}
    </section>
  );
}

export default Regions;
