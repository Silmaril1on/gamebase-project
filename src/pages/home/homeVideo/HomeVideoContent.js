import React, { useState, useRef, useEffect } from "react";
import homeVideoContent from "../../../database/homeVideoContent";
import LeftButton from "../../../components/LeftButton";
import RightButton from "../../../components/RightButton";
import { AnimatePresence, motion } from "framer-motion";
import { slideShow } from "../../../framerMotionValues/motionValues";
import VideoThumbNail from "./VideoThumbNail";
import Button from "../../../components/Button";

function HomeVideoContent() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [games] = useState(homeVideoContent);

  const left = () => {
    setDirection(-1);
    setIndex(index === 0 ? games.length - 1 : index - 1);
  };
  const right = () => {
    setDirection(1);
    setIndex(index === games.length - 1 ? 0 : index + 1);
  };

  const videoContainer = useRef();

  useEffect(() => {
    videoContainer.current?.load();
  });

  return (
    <main className="flexCol bg-black">
      <section className="relative h-600 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={slideShow}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={games[index].video}
            custom={direction}
            className="absolute h-full w-full"
          >
            <video
              ref={videoContainer}
              className="w-full h-full object-cover"
              autoPlay={true}
              loop={true}
              muted
            >
              <source src={games[index].video} type="video/mp4" />
            </video>
            <article className="w-full z-4 h-full absolute top-0 left-0 flexCol items-center justify-center">
              <div className="w-64 h-auto md:w-auto md:h-44 mt-10">
                <img
                  className="w-full h-full md:object-cover"
                  src={games[index].logo}
                  alt="video_logo"
                />
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
        <div className="bg-topBlack absolute top-0 left-0 z-1 w-full h-full"></div>
        <section className="absolute z-4 top-0 h-full flexCol items-center w-full justify-end md:justify-center md:mt-20 pb-4 ">
          <div className="flexRow w-full mb-20 justify-between px-5 md:justify-around">
            <LeftButton onClick={left} />
            <RightButton onClick={right} />
          </div>
          <Button>buy now</Button>
        </section>
      </section>
      <VideoThumbNail setIndex={setIndex} index={index} />
    </main>
  );
}

export default HomeVideoContent;
