import React, { useEffect, useState } from "react";
import Header from "./games-components/Header";
import GameDevs from "./games-components/GameDevs";
import GamesShop from "./games-column-layout/GamesShop";
import GamesSlider from "./games-row-layout/GamesSlider";
import ShopStyle from "./games-components/ShopStyle";
import { Helmet } from "react-helmet";
import LayoutButtons from "./games-components/LayoutButtons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { getAverageRating } from "../../features/gamesSlice";

function Games() {
  const [layout, setLayout] = useState(true);
  const dispatch = useDispatch();
  const ratingsRef = collection(db, "gamesratings");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameRatings = async () => {
      setLoading(true);

      const data = await getDocs(ratingsRef);
      const gameRatings = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getAverageRating(gameRatings));
      setLoading(false, "data fetched");
    };
    getGameRatings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {layout ? <GamesShop loading={loading} /> : <GamesSlider />}
      </section>
    </main>
  );
}

export default Games;
