import React from "react";
import video1 from "../../../assets/valve_hero_01_fullsize.webm";

function ValveVideo() {
  return (
    <section className="fixed top-0 z-0 w-full">
      <div>
        <video
          className="object-cover h-screen w-full"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src={video1} type="video/webm" />
        </video>
      </div>
    </section>
  );
}

export default ValveVideo;
