import React from "react";
import logo1 from "../../../assets/steam_logo_footer.png";
import logo2 from "../../../assets/steamworks_logo_footer.png";

function ValveFooter() {
  return (
    <footer className="bg-valveRed mt-24 flex flex-col md:flex-row justify-around text-white py-10 [&_h4]:text-black [&_h4]:capitalize [&_h4]:text-sm [&_h4]:cursor-pointer hover:[&_h4]:text-white pl-10 space-y-8 md:space-y-0">
      <div className="w-36">
        <h1 className="font-bold capitalize md:w-16">valve corporation</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0">
        <article className="w-44 ">
          <h1>Contact</h1>
          <h4>people</h4>
          <h4>press inquiries</h4>
        </article>
        <article className="w-44 ">
          <h1>Stuff</h1>
          <h4>about us</h4>
          <h4>jobs</h4>
          <h4>steam partners</h4>
          <h4>publications</h4>
        </article>
        <article className="w-44 ">
          <h1>More stuff</h1>
          <h4>site terms of use</h4>
          <h4>privacy policy</h4>
          <h4>security</h4>
          <h4>legals</h4>
        </article>
      </div>
      <div className="flex flex-row space-x-5">
        <img className="h-10 w-auto" src={logo1} alt="steam" />
        <img className="h-10 w-auto" src={logo2} alt="steam" />
      </div>
    </footer>
  );
}

export default ValveFooter;
