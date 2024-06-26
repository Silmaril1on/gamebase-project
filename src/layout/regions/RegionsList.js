import React, { useState } from "react";
import CloseButton from "../../components/CloseButton";
import regionsData from "../../database/regions";
import { motion } from "framer-motion";
import { zoomIn200 } from "../../framerMotionValues/motionValues";

function RegionsList({ setIsOpen }) {
  return (
    <div className="bg-400 w-full h-full fixed top-0 left-0 flex items-center justify-center">
      <motion.div
        variants={zoomIn200}
        initial="hidden"
        animate="visible"
        className="w-full md:w-2/4 h-full bg-black flexCol items-center py-6"
      >
        <section className="flexRow w-10/12 justify-between">
          <h1 className="font-primary text-cream uppercase text-5xl ml-6 font-bold">
            select region
          </h1>
          <div onClick={() => setIsOpen(false)}>
            <CloseButton />
          </div>
        </section>
        <section className=" w-10/12">
          <RegLanguage />
        </section>
      </motion.div>
    </div>
  );
}

function RegLanguage() {
  const [active, setActive] = useState(0);

  return (
    <div className="flexCol items-center text-cream">
      {regionsData.map((reg) => {
        return (
          <div className="mt-3 w-10/12" key={reg.id}>
            <h1 className="font-tetriary text-gray-400 font-bold mb-1">
              {reg.name}
            </h1>
            <div className="grid grid-cols-2">
              {reg.locations.map((lang, id) => {
                return (
                  <div key={id}>
                    <h4
                      onClick={() => setActive(lang.id)}
                      className={
                        active === id
                          ? "font-primary bg-amber-400 text-black indent-2 text-xs md:text-xl capitalize hover:bg-amber-400 hover:text-black duration-300 cursor-pointer p-1 w-auto inline"
                          : "font-primary indent-2 text-xs md:text-xl capitalize hover:bg-amber-400 p-1 w-auto inline hover:text-black duration-300 cursor-pointer"
                      }
                    >
                      {lang.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RegionsList;
