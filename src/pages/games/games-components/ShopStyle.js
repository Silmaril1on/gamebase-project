import React from "react";
import AnimatedLetters from "../../../components/AnimatedLetters";

function ShopStyle() {
  return (
    <section className="center flex-col">
      <AnimatedLetters
        text="find your game"
        className="font-primary text-4xl uppercase"
      />
      <p className="responsive-p font-light">
        Hundreds of games in one section
      </p>
    </section>
  );
}

export default ShopStyle;
