import React, { useState } from "react";
import GamesList from "./GamesList";
import Categories from "./Categories";

function GamesShop({ loading }) {
  const [hide, setHide] = useState(false);
  return (
    <main className="flexCol md:flexRow relative">
      <Categories hide={hide} setHide={setHide} />
      <GamesList hide={hide} loading={loading} />
    </main>
  );
}

export default GamesShop;
