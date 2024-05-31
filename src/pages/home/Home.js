import React from "react";
import HomeVideoContent from "./homeVideo/HomeVideoContent";
import Games from "./homeGames/Games";
import News from "./homeNews/News";
import Playstation from "./playstation/Playstation";
import Products from "./products/Products";
import { Helmet } from "react-helmet";
import GamesSwper from "./homeGamesMobileSwiper/GamesSwper";

function Home() {
  return (
    <main className="text-white -mt-32">
      <Helmet>
        <title>GAMEBASE | Home</title>
      </Helmet>
      <HomeVideoContent />
      <Playstation />
      <News />
      <GamesSwper />
      <Games />
      <Products />
    </main>
  );
}

export default Home;
