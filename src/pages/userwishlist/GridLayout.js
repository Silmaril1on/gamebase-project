import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { BsBookmarkHeartFill } from "react-icons/bs";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

function GridLayout() {
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
    <>
      {userWishlistGames.length === 0 ? (
        <div className="w-full center h-full p-10">
          <h1 className="font-bold capitalize font-secondary text-2xl">
            your game list is empty
          </h1>
        </div>
      ) : (
        <div className="mt-10 flex flex-row flex-wrap">
          {userWishlistGames.map((game) => {
            const { id, image, name } = game;
            return (
              <div
                className="w-[170px] h-[300px] flex flex-col relative duration-300 m-2"
                key={id}
              >
                <div className="w-full h-full overflow-hidden">
                  <img className="w-full h-auto" src={image} alt="" />
                </div>
                <article className=" h-16">
                  <h1 className="capitalize font-bold">{name}</h1>
                </article>

                <div className="absolute w-full h-full duration-300 center opacity-0 hover:opacity-100 bg-black/60 flexCol">
                  <BsBookmarkHeartFill
                    className="text-amber-400 text-3xl hover:scale-125 duration-300 cursor-pointer mb-5"
                    onClick={() => deleteShow(id)}
                  />
                  <NavLink to="/gamePage" state={{ game }}>
                    <Button>visit page</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default GridLayout;
