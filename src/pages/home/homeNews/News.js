import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import CardSix from "./CardSix";
import CardSeven from "./CardSeven";
import CardEight from "./CardEight";
import CardNine from "./CardNine";
import HeadLine from "./HeadLine";

function News() {
  return (
    <main className="mt-10">
      <HeadLine />
      <section className="grid grid-cols-2 grid-rows-7 gap-2">
        <CardOne />
        <CardTwo />
        <CardFour />
        <CardThree />
        <CardFive />
        <CardSix />
        <CardSeven />
        <CardEight />
        <CardNine />
      </section>
    </main>
  );
}

export default News;
