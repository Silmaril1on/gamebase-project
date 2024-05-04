import React, { useState } from "react";
import { Helmet } from "react-helmet";
import WishListHeader from "./WishListHeader";
import LayoutButton from "./LayoutButton";
import GridLayout from "./GridLayout";
import ColumnLayout from "./ColumnLayout";

function Wishlist() {
  const [layout, setLayout] = useState(false);

  const changeLaout = () => {
    setLayout(!layout);
  };

  return (
    <main className="h-auto p-2 ">
      <Helmet>
        <title>GAMEBASE | Wishlist</title>
      </Helmet>
      <WishListHeader />
      <LayoutButton layout={layout} changeLaout={changeLaout} />
      {layout ? <GridLayout /> : <ColumnLayout />}
    </main>
  );
}

export default Wishlist;
