import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesList from "./GamesList";
import LogoOne from "../../../components/LogoOne";
import RightButton from "../../../components/RightButton";
import LeftButton from "../../../components/LeftButton";
import { motion } from "framer-motion";
import AnimatedLetters from "../../../components/AnimatedLetters";

const url = "https://silmaril1on.github.io/custom_data_API/games-data.json";

function Games() {
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        setGames(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const left = () => {
    setIndex(index === 0 ? 5 : index - 1);
  };
  const right = () => {
    setIndex(index === 5 ? 0 : index + 1);
  };

  if (isLoading) {
    return (
      <div className="w-full h-64 mt-20 pt-20 ">
        <LogoOne />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-64 mt-20 pt-20 flexCol items-center">
        <LogoOne />
        <h1 className="font-primary text-3xl uppercase mt-5">
          woops, something went wrong
        </h1>
      </div>
    );
  }

  return (
    <main className="relative hidden md:block pb-5 my-20 overflow-hidden before:absolute before:bg-amber-400 before:w-[2700px] before:z-0 before:h-[1000px] before:top-28 before:left-36 before:skew-x-110">
      <section className="overflow-hidden relative">
        <div className="mb-14 text-center">
          <AnimatedLetters
            className="text-cream text-5xl tracking-wide uppercase font-primary"
            text="Great games out now or coming soon"
          />
          <p className="text-stone-300 primary-p">
            Immerse yourself in epic worlds that go beyond reality with a vast
            selection of various games
          </p>
        </div>
        <motion.div
          initial={{ index }}
          animate={{ translateX: `-${index * 256}px` }}
          transition={{ duration: 0.5 }}
          className="flex flex-row w-max justify-center items-center relative z-5 py-3"
        >
          {games.slice(0, 11).map((game) => {
            return <GamesList key={game.id} {...game} game={game} />;
          })}
        </motion.div>
        <div className="w-full h-full absolute top-0 flex items-center justify-between px-10">
          <LeftButton onClick={left} />
          <RightButton onClick={right} />
        </div>
      </section>
    </main>
  );
}

export default Games;
