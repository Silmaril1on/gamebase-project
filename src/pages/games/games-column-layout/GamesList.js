import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../../features/gamesSlice";
import GameCard from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";

function GamesList({ hide }) {
  const { filteredGames } = useSelector((store) => store.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <section className="w-full ml-2 p-2">
      <AnimatePresence>
        <motion.div
          layout
          className={
            hide
              ? "grid grid-cols-3 justify-items-center md:grid-cols-4 xl:grid-cols-8 grid-rows-12 gap-2"
              : "grid grid-cols-3 justify-items-center md:grid-cols-4 xl:grid-cols-7 grid-rows-12 gap-2"
          }
        >
          {filteredGames.map((game) => {
            return <GameCard key={game.id} {...game} game={game} />;
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default GamesList;
