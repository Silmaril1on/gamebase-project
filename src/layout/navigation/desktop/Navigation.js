import React from "react";
import NavigationLinks from "./NavigationLinks";
import NavigationHeader from "./NavigationHeader";

function Navigation() {
  return (
    <nav className="flex flex-col relative z-5">
      <NavigationHeader />
      <NavigationLinks />
    </nav>
  );
}

export default Navigation;
