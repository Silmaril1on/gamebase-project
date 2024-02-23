import React from "react";
import ValveVideo from "./ValveVideo";
import ValveContent from "./ValveContent";
import { Helmet } from "react-helmet";

function Valve() {
  return (
    <section className="relative text-valveRed z-5 -mt-20 md:-mt-32 border">
      <Helmet>
        <title>GAMEBASE | Valve</title>
      </Helmet>
      <ValveVideo />
      <ValveContent />
    </section>
  );
}

export default Valve;
