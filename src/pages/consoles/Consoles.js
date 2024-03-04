import React from "react";
import Header from "./console-components/Header";
import { Helmet } from "react-helmet";
import ConsolesSlideShow from "./console-components/ConsolesSlideShow";
import ConsolesShop from "./consoles-shop/ConsolesShop";

function Consoles() {
  return (
    <main className="-mt-32 flexCol text-cream">
      <Helmet>
        <title>GAMEBASE | Games</title>
      </Helmet>
      <Header />
      <ConsolesSlideShow />
      <ConsolesShop />
    </main>
  );
}

export default Consoles;
