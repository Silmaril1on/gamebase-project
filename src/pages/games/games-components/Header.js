import React from "react";
import video from "../../../assets/gamevideo.mp4";
import AnimatedLetters from "../../../components/AnimatedLetters";
import Ps from "../../../components/Ps";
import Xbox from "../../../components/Xbox";

function Header() {
  return (
    <section className="center flex-col">
      <div className="h-[600px] w-full relative">
        <div className="bg-topBlack absolute top-0 w-full h-full"></div>
        <video
          className="h-full w-full object-cover"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <article className="center flex-col my-10 py-5">
        <AnimatedLetters
          text="play unmissable games"
          className="text-4xl md:text-6xl font-primary uppercase"
        />

        <p className="responsive-p px-2 font-light w-full md:w-2/4 text-center">
          Explore a generation of critically-acclaimed games, including
          blockbuster console exclusive games from PlayStation Studios,
          immersive PS VR titles, and innovative indies.
        </p>
        <div className="center flex-row h-20 w-auto">
          <Ps />
          <div className="h-20">
            <Xbox />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Header;
