import React from "react";
import valveLogo from "../../../assets/valve_logo.png";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function ValveHeader() {
  return (
    <section className="flex flex-col my-10 items-center pl-4 md:pl-20">
      <div className="w-full mb-10 md:mb-20">
        <NavLink to="/">
          <img className="h-10 w-auto" src={valveLogo} alt="valve" />
        </NavLink>
      </div>
      <article className="flex flex-col md:flex-row mt-16">
        <div className="w-full md:w-2/4 space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold">
            We make games, Steam, and hardware. Join us.
          </h1>
          <p className="text-white font-semibold text-xl pr-5 tracking-wide leading-9">
            We aren't a typical company—which is why you're here, right? As a
            flat company without hierarchy and job titles, we don't usually hire
            for specific roles. (Though we sometimes do!) Opportunities at Valve
            run broad and deep. We're always hiring highly experienced
            collaborators who are the best at what they do, across the following
            areas:
          </p>
        </div>
        <div className="flex mt-10 items-center md:items-end flex-row justify-center w-full md:w-2/4">
          <input
            className="bg-transparent w-11/12 md:w-2/5 mb-10 pb-2 border-b-2 border-white placeholder:text-white outline-none text-valveRed"
            placeholder="Search Jobs"
            type="search"
            name=""
            id=""
          />
          <IoSearch className="mb-10 text-3xl text-white ml-3" />
        </div>
      </article>
    </section>
  );
}

export default ValveHeader;
