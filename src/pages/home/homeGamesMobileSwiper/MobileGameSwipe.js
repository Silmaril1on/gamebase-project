import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";

function MobileGameSwipe({ games, animation, gamesData }) {
  return (
    <>
      {gamesData.slice(0, 11).map((game) => {
        const { image, name, platforms, info } = game;
        return (
          <motion.div
            key={game.id}
            animate={{
              scale: games === game.id ? 0.95 : 0.7,
            }}
            transition={animation}
            className="w-[285px] center h-full"
          >
            <section className="relative w-full h-full group px-2 center">
              <div className="flexCol items-center justify-end bg-stone-800 hover:bg-stone-700 outline-none hover:cream-outline duration-300">
                <div className="w-56 h-72 group relative">
                  <img
                    className="w-full h-full object-cover -top-10 duration-300 absolute z-2 border border-cream group-hover:-top-14 "
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="flexCol items-center">
                  <div className="flexRow mb-3 w-full justify-start px-4 space-x-3 *:h-4 *:w-auto *:rounded-sm">
                    {platforms.ps ? (
                      <img src={platforms.ps} alt="platform" />
                    ) : (
                      ""
                    )}
                    {platforms.xbox ? (
                      <img src={platforms.xbox} alt="platform" />
                    ) : (
                      ""
                    )}
                    {platforms.pc ? (
                      <img src={platforms.pc} alt="platform" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flexCol items-center">
                    <h1 className="font-primary uppercase text-md w-full px-4">
                      {name}
                    </h1>
                    <p className="font-secondary font-light text-xs px-4 text-zinc-200 h-40 pt-2">
                      {info}
                    </p>
                  </div>
                  <div className="mb-4 relative z-2">
                    <NavLink to="/gamepage" state={{ game: game }}>
                      <Button className="cream-button text-xs">
                        find our more
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        );
      })}
    </>
  );
}

export default MobileGameSwipe;
