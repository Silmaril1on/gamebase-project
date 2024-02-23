import React from "react";
import video from "../../../assets/console_video.mp4";
import AnimatedLetters from "../../../components/AnimatedLetters";

function Header() {
  return (
    <section className="center flex-col">
      <div className="h-600 w-full relative">
        <div className="bg-topBlack absolute top-0 w-full h-full"></div>
        <video
          className="h-full w-full object-cover"
          autoPlay={true}
          loop={false}
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <article className="center flex-col my-10 py-5">
        <AnimatedLetters
          text="Feel it now"
          className="text-4xl md:text-6xl font-primary uppercase"
        />
      </article>
    </section>
  );
}

export default Header;
