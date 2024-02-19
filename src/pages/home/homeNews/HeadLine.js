import React from "react";
import AnimatedLetters from "../../../components/AnimatedLetters";

function HeadLine() {
  return (
    <header className="flexCol items-center py-5 mt-5">
      <AnimatedLetters
        text="news & features"
        className=" text-cream text-5xl font-primary uppercase"
      />
      <p className="w-full md:w-2/4 text-stone-300 text-center">
        Play hundreds of incredible PS5/PS4 & XBOX and classic PlayStation
        games, and discover epic adventures, unique indies, family favourites,
        and everything in between.
      </p>
    </header>
  );
}

export default HeadLine;
