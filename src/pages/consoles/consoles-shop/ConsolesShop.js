import React from "react";
import ConsolesList from "./ConsolesList";
import AnimatedLetters from "../../../components/AnimatedLetters";

function ConsolesShop() {
  return (
    <section className="flex flex-col">
      <div className="center my-5 flex-col">
        <AnimatedLetters
          text="find your accessory"
          className="uppercase text-4xl font-primary"
        />
        <p>PS & XBOX accessories</p>
      </div>
      <ConsolesList />
    </section>
  );
}

export default ConsolesShop;
