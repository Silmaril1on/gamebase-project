import React from "react";
import { useSelector } from "react-redux";
import SortedGames from "./SortedGames";
import developerButtons from "../../../database/developerButtons";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../../framerMotionValues/motionValues";

function GamesSlider() {
  const { gamesData } = useSelector((store) => store.games);

  return (
    <motion.section variants={fadeOut700} initial="hidden" animate="visible">
      <div className="space-y-2">
        {developerButtons.map((developer) => {
          const byDevelopers = gamesData.filter((game) => {
            if (game.developer === developer.developer) {
              return game;
            }
          });
          return (
            <div key={developer.id} className="">
              <h1 className="text-3xl  uppercase m-3">{developer.name}</h1>
              <SortedGames data={byDevelopers} />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default GamesSlider;
