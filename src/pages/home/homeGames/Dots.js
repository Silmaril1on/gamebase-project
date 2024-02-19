import React from "react";

function Dots({ games, index, setIndex }) {
  return (
    <div className="flexRow p-2 relative z-1 w-full justify-center space-x-1">
      {games.slice(0, 11).map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setIndex(item.id);
            }}
            className={
              index === item.id
                ? "h-0.5 w-5 rounded-xl cursor-pointer bg-stone-200"
                : "h-0.5 w-5 rounded-xl cursor-pointer bg-stone-400 hover:bg-stone-200 duration-300"
            }
          ></div>
        );
      })}
    </div>
  );
}

export default Dots;
