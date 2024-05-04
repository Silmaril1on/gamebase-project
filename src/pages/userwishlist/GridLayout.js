import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import CloseButton from "../../components/CloseButton";

function GridLayout() {
  const { userReg, userWishlistGames } = useSelector((store) => store.user);
  const gameRef = doc(db, "userGames", `${userReg?.email}`);

  console.log(userWishlistGames);

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
        <div className="mt-10 flex flex-row flex-wrap space-x-2">
          {userWishlistGames.map((game) => {
            return (
              <div
                className="w-[170px] h-[260px] flex flex-col relative duration-300 outline outline-offset-2 outline-none hover:cream-outline"
                key={game.id}
              >
                <div className="w-full h-full overflow-hidden">
                  <img className="w-full h-auto" src={game.img} alt="" />
                </div>
                <article className=" h-16">
                  <h1 className="capitalize font-bold">{game.title}</h1>
                </article>

                <div className="absolute w-full h-full duration-300 center opacity-0 hover:opacity-100 bg-black/60">
                  <CloseButton onClick={() => deleteShow(game.id)} />
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
