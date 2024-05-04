import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import CloseButton from "../../components/CloseButton";
import SomeInfo from "./SomeInfo";

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
    <section className="flex flex-row">
      {userWishlistGames.length === 0 ? (
        <div className="w-full center h-full p-10">
          <h1 className="font-bold capitalize font-secondary text-2xl">
            your game list is empty
          </h1>
        </div>
      ) : (
        <div className="flex h-full space-y-3 flex-col w-full lg:w-8/12 py-5">
          {userWishlistGames.map((game) => {
            const { id, img, developer, year, info, title, platforms } = game;
            return (
              <div
                key={id}
                className="w-full h-[230px] bg-black center flex-row relative duration-300 outline outline-offset-2 outline-none hover:cream-outline hover:bg-stone-800"
              >
                <div className="w-52 h-full overflow-hidden">
                  <img
                    className="w-full object-cover h-full"
                    src={img}
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
                <div className="absolute top-0 right-0">
                  <CloseButton onClick={() => deleteShow(id)} />
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
