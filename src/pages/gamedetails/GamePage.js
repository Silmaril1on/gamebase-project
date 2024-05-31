import React from "react";
import GameDetails from "./gamecontent/GameDetails";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import SideInfo from "./sideinfo/SideInfo";

function GamePage() {
  const location = useLocation();
  const details = location.state.game;

  return (
    <main className="relative">
      <Helmet>
        <title>Game | {details?.name}</title>
      </Helmet>
      <section className="space-x-1 flex flex-col xl:flex-row overflow-hidden">
        <GameDetails details={details} />
        <SideInfo details={details} />
      </section>
    </main>
  );
}

export default GamePage;
