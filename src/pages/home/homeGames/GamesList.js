import React from "react";

function GamesList({ name, image, info, platforms }) {
  return (
    <section className="relative bg-stone-800 hover:bg-stone-700 rounded-xl w-64 flexCol h-full group items-center justify-end mx-2 outline-none hover:stone-outline duration-300">
      <div className="w-56 h-72 group relative">
        <img
          className="w-full h-full object-cover -top-10 duration-300 absolute z-2 border border-stone-500 group-hover:-top-14 "
          src={image}
          alt={name}
        />
      </div>
      <div className="flexCol items-center">
        <div className="flexRow mb-3 w-full justify-start px-4 space-x-3">
          <img
            className="h-4 w-auto rounded-sm"
            src={platforms.ps}
            alt="platform"
          />
          <img
            className="h-4 w-auto rounded-sm"
            src={platforms.steam}
            alt="platform"
          />
          <img
            className="h-4 w-auto rounded-sm"
            src={platforms.xbox}
            alt="platform"
          />
        </div>
        <div className="flexCol items-center">
          <h1 className="font-primary uppercase text-md w-full px-4">{name}</h1>
          <p className="font-secondary font-light text-xs px-4 text-zinc-200 h-40 pt-2">
            {info}
          </p>
        </div>
        <div className="mb-4 relative z-2">
          <button className="primary-button text-xs">find our more</button>
        </div>
      </div>
    </section>
  );
}

export default GamesList;
