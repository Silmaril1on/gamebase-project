import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import axios from "axios";
import MobileGameSwipe from "./MobileGameSwipe";

const url = "https://silmaril1on.github.io/custom_data_API/games-data.json";

const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function GamesSwper() {
  const [games, setGames] = useState(0);
  const [gamesData, setGamesData] = useState([]);
  const dragX = useMotionValue(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        setGamesData(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && games < gamesData.slice(0, 11).length - 1) {
      setGames((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && games > 0) {
      setGames((pv) => pv - 1);
    }
  };

  return (
    <div className="md:hidden w-full h-screen overflow-hidden center flex-col relative before:absolute before:bg-amber-400 before:w-[2700px] before:z-0 before:h-[1000px] before:-top-[80px] before:left-36 before:skew-x-110">
      <section className="w-[285px] block h-[650px] overflow-hidden relative ">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${games * 285}px`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="cursor-grab flex items-center active:cursor-grabbing h-full w-max"
        >
          <MobileGameSwipe
            games={games}
            animation={SPRING_OPTIONS}
            gamesData={gamesData}
          />
        </motion.div>
      </section>
      <div className="w-full center flex-col text-black h-10 relative z-5">
        <h1 className="font-bold text-2xl  capitalize font-primary ">
          our recent games
        </h1>
        <h1 className=" text-xl font-tetriary ">top exclusives</h1>
      </div>
    </div>
  );
}

export default GamesSwper;
