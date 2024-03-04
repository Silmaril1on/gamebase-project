import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItems } from "../../../features/gamesSlice";
import { motion } from "framer-motion";
import { hideToggle } from "../../../framerMotionValues/motionValues";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import categoryButtons from "../../../database/categoryButtons";

function Categories({ hide, setHide }) {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <motion.section
        variants={hideToggle}
        animate={hide ? "hidden" : "visible"}
        className={
          hide
            ? "w-full h-auto md:w-2/12 bg-stone-800 p-2 relative hidden"
            : "w-full h-auto md:w-2/12 bg-stone-800 p-2 sticky top-0 z-5"
        }
      >
        <div className="sticky top-0 overflow-hidden grid grid-cols-3 md:grid-cols-1 justify-items-center">
          <div className="bg-arabic absolute top-24 rotate-45 h-full w-96 -z-2"></div>
          {categoryButtons.map((button, index) => {
            return (
              <h1
                key={button.id}
                onClick={() => {
                  dispatch(filterItems(button.category));
                  setActive(index);
                }}
                className={
                  active === button.id
                    ? "text-base font-secondary font-bold cursor-pointer underline underline-offset-2 uppercase my-1 tracking-wide duration-300 hover:font-bold"
                    : "text-base font-secondary font-bolder cursor-pointer capitalize my-1 tracking-wide duration-300"
                }
              >
                {button.name}
              </h1>
            );
          })}
        </div>
      </motion.section>
      <button
        className="sticky rounded-br-xl bg-stone-800 top-0 h-20 hover:bg-stone-700 duration-300 hidden md:block"
        onClick={() => setHide(!hide)}
      >
        {hide ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
    </>
  );
}

export default Categories;
