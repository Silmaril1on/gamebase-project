import React from "react";
import navigationData from "../../../database/navigationData";
import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <nav className="text-white hidden md:flex">
      <section className="flexRow items-center w-full pl-24 my-3">
        {navigationData.map((link) => {
          return (
            <NavLink key={link.id} to={link.link}>
              <h1 className="skew-style mr-2">{link.name}</h1>
            </NavLink>
          );
        })}
      </section>
    </nav>
  );
}

export default NavigationLinks;
