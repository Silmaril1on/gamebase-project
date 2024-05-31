import React from "react";
import GameBanner from "./GameBanner";
import GameInfo from "./GameInfo";

function GameDetails({ details }) {
  return (
    <section className="relative w-full xl:w-9/12">
      <GameBanner details={details} />
      <GameInfo details={details} />
    </section>
  );
}

export default GameDetails;
