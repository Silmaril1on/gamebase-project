import React from "react";

function CardBorder() {
  return (
    <>
      <div className="absolute overflow-hidden child:before:duration-1000 [&>*:nth-child(1)]:before:hover:translate-y-full [&>*:nth-child(2)]:before:hover:translate-y-full [&>*:nth-child(3)]:before:hover:translate-x-full [&>*:nth-child(4)]:before:hover:translate-x-full w-full h-full top-0 left-0">
        <div className="w-0.5 h-full bg-blue-600 before:w-0.5 before:h-full before:bg-cardGradienth before:absolute  before:-translate-y-full"></div>
        <div className="w-0.5 h-full bg-blue-600 absolute right-0 top-0 before:w-0.5 before:h-full before:bg-cardGradienth before:absolute  before:-translate-y-full before:delay-700"></div>
        <div className="w-full h-0.5 bg-blue-600 absolute right-0 top-0 before:w-full before:h-0.5 before:bg-cardGradient before:absolute  before:-translate-x-full"></div>
        <div className="w-full h-0.5 bg-blue-600 absolute right-0 bottom-0 before:w-full before:h-0.5 before:bg-cardGradient before:absolute  before:-translate-x-full before:delay-700"></div>
      </div>
    </>
  );
}

export default CardBorder;
