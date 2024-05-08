import React, { useState } from "react";
import { Helmet } from "react-helmet";
import WishListHeader from "./WishListHeader";
import LayoutButton from "./LayoutButton";
import GridLayout from "./GridLayout";
import ColumnLayout from "./ColumnLayout";
import SideSection from "./SideSection";

function Wishlist() {
  const [layout, setLayout] = useState(false);

  const changeLaout = () => {
    setLayout(!layout);
  };

  return (
    <main className="h-auto p-2">
      <Helmet>
        <title>GAMEBASE | Wishlist</title>
      </Helmet>
      <WishListHeader />
      <LayoutButton layout={layout} changeLaout={changeLaout} />
      <div className="flex flex-row">
        <section className=" w-full lg:w-8/12">
          {layout ? <GridLayout /> : <ColumnLayout />}
        </section>
        <SideSection />
      </div>
    </main>
  );
}

export default Wishlist;
