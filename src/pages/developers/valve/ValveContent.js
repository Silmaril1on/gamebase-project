import React from "react";
import ValveHeader from "./ValveHeader";
import ValveJobLists from "./ValveJobLists";
import ValveFooter from "./ValveFooter";

function ValveContent() {
  return (
    <section className="w-full bg-400 *:w-full absolute top-0 z-2">
      <ValveHeader />
      <ValveJobLists />
      <ValveFooter />
    </section>
  );
}

export default ValveContent;
