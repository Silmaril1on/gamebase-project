import React, { useState } from "react";
import Header from "./games-components/Header";
import GameDevs from "./games-components/GameDevs";
import GamesShop from "./games-column-layout/GamesShop";
import GamesSlider from "./games-row-layout/GamesSlider";
import ShopStyle from "./games-components/ShopStyle";
import { Helmet } from "react-helmet";
import LayoutButtons from "./games-components/LayoutButtons";

function Games() {
  const [layout, setLayout] = useState(true);

  return (
    <main className="text-cream flexCol -mt-32">
      <Helmet>
        <title>GAMEBASE | Games</title>
      </Helmet>
      <Header />
      <GameDevs />
      <section className="flexCol w-full">
        <ShopStyle />
        <LayoutButtons setLayout={setLayout} />
        {layout ? <GamesShop /> : <GamesSlider />}
      </section>
    </main>
  );
}

export default Games;
