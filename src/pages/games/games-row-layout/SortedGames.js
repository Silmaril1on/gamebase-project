import React, { useState } from "react";
import { motion } from "framer-motion";
import GameCard from "./GameCard";
import LeftButton from "../../../components/LeftButton";
import RightButton from "../../../components/RightButton";

function SortedGames({ data }) {
  const [games, setGames] = useState(data);

  const shiftProducts = (direction) => {
    setGames((prevProducts) => {
      const updatedProducts =
        direction === "left"
          ? [...prevProducts.slice(-1), prevProducts.slice(0, -1)]
          : [...prevProducts.slice(1), prevProducts[0]];
      return updatedProducts.flat();
    });
  };

  return (
    <section className="relative overflow-hidden">
      <motion.div className="flex justify-start flex-row relative z-2 py-2 w-max">
        {games.map((game) => {
          return <GameCard key={game.id} {...game} game={game} />;
        })}
      </motion.div>
      <div className="z-1 px-5 absolute top-0 left-0 w-full h-full flex flex-row items-center justify-between">
        <LeftButton onClick={() => shiftProducts("left")} />
        <RightButton onClick={() => shiftProducts("right")} />
      </div>
    </section>
  );
}

export default SortedGames;
