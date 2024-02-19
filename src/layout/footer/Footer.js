import React from "react";
import Regions from "../regions/Regions";
import Socials from "../../components/Socials";

function Footer() {
  return (
    <footer className="text-cream my-5 py-5">
      <section className="flexCol items-start md:flexRow md:justify-between border-b-2 space-y-2 border-cream md:items-center mx-5">
        <div className="relative z-2">
          <Regions />
        </div>
        <div className="flexRow w-full md:w-auto justify-between md:ml-2 md:mr-2 font-primary child:cursor-pointer hover:child:text-white child:duration-300 child:tracking-wide child:text-xl uppercase space-x-5 ">
          <h1>contact us</h1>
          <h1>visit us</h1>
        </div>
      </section>
      <div className="my-5 flexCol items-center">
        <h1 className="font-primary text-3xl uppercase mb-2">follow us on</h1>
        <Socials />
      </div>
      <div className="flexRow wrap justify-center space-x-4 font-primary capitalize hover:child:underline child:cursor-pointer child:duration-300">
        <h1>privacy policy</h1>
        <h1>support</h1>
        <h1>chat whit us</h1>
        <h1>feedback</h1>
      </div>
    </footer>
  );
}

export default Footer;
