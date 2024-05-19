import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import SomeInfo from "./SomeInfo";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

function ColumnLayout() {
  const { userReg, userWishlistGames } = useSelector((store) => store.user);
  const gameRef = doc(db, "userGames", `${userReg?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = userWishlistGames.filter((item) => item.id !== passedID);
      await updateDoc(gameRef, {
        savedGames: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      {userWishlistGames?.length === 0 ? (
        <div className="w-full center h-full p-10">
          <h1 className="font-bold capitalize font-secondary text-2xl">
            your game list is empty
          </h1>
        </div>
      ) : (
        <div className="flex h-full space-y-3 flex-col w-full py-5">
          {userWishlistGames?.map((game) => {
            const { id, image, developer, year, info, title, platforms } = game;
            return (
              <div
                key={id}
                className="w-full h-[230px] center flex-row relative duration-300 bg-stone-800 hover:bg-stone-900"
              >
                <div className="w-52 h-full overflow-hidden">
                  <img
                    className="w-full object-cover h-full"
                    src={image}
                    alt="game-avatar"
                  />
                </div>
                <article className="flex flex-col w-full ml-2 h-full">
                  <h1 className="capitalize font-bold text-2xl">{title}</h1>
                  <h1 className="uppercase">{developer}</h1>
                  <h1 className="capitalize font-bold">{year}</h1>
                  <div className="flex flex-row h-6 *:p-1 *:w-6 space-x-2">
                    {platforms.ps ? (
                      <img src={platforms.ps} alt="platform" />
                    ) : (
                      ""
                    )}
                    {platforms.xbox ? (
                      <img src={platforms.xbox} alt="platform" />
                    ) : (
                      ""
                    )}
                    {platforms.pc ? (
                      <img src={platforms.pc} alt="platform" />
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="w-full md:w-[500px] font-light">{info}</p>
                </article>
                <div className="absolute top-2 right-2 flex justify-end items-end flex-col">
                  <BsBookmarkHeartFill
                    className="text-amber-400 text-3xl hover:scale-125 duration-300 cursor-pointer mb-5"
                    onClick={() => deleteShow(id)}
                  />
                  <NavLink to="/gamepage" state={{ game }}>
                    <Button>visit page</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <SomeInfo />
    </section>
  );
}

export default ColumnLayout;
