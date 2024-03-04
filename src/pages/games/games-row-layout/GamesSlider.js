import React from "react";
import { useSelector } from "react-redux";
import SortedGames from "./SortedGames";
import developerButtons from "../../../database/developerButtons";
import { motion } from "framer-motion";
import { fadeOut700 } from "../../../framerMotionValues/motionValues";

function GamesSlider() {
  const { gamesData } = useSelector((store) => store.games);

  return (
    <section>
      <div className="space-y-2">
        {developerButtons.map((developer) => {
          const byDevelopers = gamesData.filter((game) => {
            if (game.developer === developer.developer) {
              return game;
            }
            return null;
          });

          return (
            <motion.div
              variants={fadeOut700}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={developer.id}
            >
              <h1 className="text-3xl uppercase m-3">{developer.name}</h1>
              <SortedGames data={byDevelopers} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default GamesSlider;
