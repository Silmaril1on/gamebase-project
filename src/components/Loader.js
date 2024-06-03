import React from "react";
import loader from "../assets/loader.gif";

function Loader() {
  return (
    <div className="absolute top-0 left-0">
      <img className="w-5 h-auto" src={loader} alt="loader" />
    </div>
  );
}

export default Loader;
