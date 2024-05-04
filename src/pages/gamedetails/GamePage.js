import React from "react";
import GameDetails from "./GameDetails";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import SideInfo from "./SideInfo";

function GamePage() {
  const location = useLocation();
  const details = location.state.game;
  return (
    <main className="relative">
      <Helmet>
        <title>Game | {details?.name}</title>
      </Helmet>
      <section className="space-x-1 flex flex-row overflow-hidden">
        <GameDetails details={details} />
        <SideInfo />
      </section>
    </main>
  );
}

export default GamePage;