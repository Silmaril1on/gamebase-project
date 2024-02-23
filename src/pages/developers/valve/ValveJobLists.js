import React, { useState } from "react";
import valveData from "../../../database/valveJobsList,";
import { motion } from "framer-motion";
import { slideDown } from "../../../framerMotionValues/motionValues";

function ValveJobLists() {
  const [subMenu, setSubMenu] = useState(null);

  const openJob = (index) => {
    if (index === subMenu) {
      setSubMenu(null);
      return;
    }
    setSubMenu(index);
  };

  return (
    <section className="my-10">
      <article className="space-y-5 md:space-y-7 w-full">
        {valveData.map((job) => {
          return (
            <div onClick={() => openJob(job.subData)} key={job.id}>
              <h1 className="text-5xl md:text-7xl ml-4 md:ml-20 font-bold capitalize duration-300 hover:text-white cursor-pointer">
                {job.name}
              </h1>
              {subMenu === job.subData && (
                <ValveJobSubLists data={job.subData} />
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
}

function ValveJobSubLists({ data }) {
  return (
    <motion.section
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="bg-gray-200 text-black w-full my-10 px-4 md:px-20 py-14"
    >
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-xl font-semibold">We're always hiring.</h1>
        <p className="text-xs md:text-xl">
          We hire people with broad skill sets who also exhibit deep expertise.
          While nobody at Valve has a job title, we do have certain fields that
          we're always looking to hire in.
        </p>
        <article className="grid grid-cols-1 md:grid-cols-4 py-5 md:gap-10">
          {data.map((item, index) => {
            return (
              <div key={index} className="mb-10">
                <h1 className="font-bold capitalize text-xl">{item.name}</h1>
                {item.subName ? (
                  <h1 className="font-semibold capitalize text-gray-500">
                    {item.subName}
                  </h1>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </article>
      </div>
    </motion.section>
  );
}

export default ValveJobLists;
