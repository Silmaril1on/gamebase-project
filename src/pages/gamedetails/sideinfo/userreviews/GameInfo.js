import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../features/gamesSlice";

function GameInfo({ setGameReviewForm }) {
  const { userReg } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const details = location.state.details;

  return (
    <article className="flex flex-row w-full lg:w-9/12">
      <div className="w-40 h-auto">
        <img src={details.image} alt="" />
      </div>
      <div className="flex flex-col ml-2">
        <div className="flex flex-row space-x-2  capitalize *:text-2xl">
          <h1>{details.name}</h1>
          <h1>({details.year})</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-amber-400">User Reviews</h1>
          <div
            onClick={() => {
              if (userReg?.email) {
                setGameReviewForm(true);
              } else {
                dispatch(openModal());
              }
            }}
            className="flex flex-row items-center space-x-2 w-[130px]"
          >
            <FaCirclePlus className="text-amber-400" />
            <h1 className="text-sm hover:underline cursor-pointer">
              Review this title
            </h1>
          </div>
        </div>
      </div>
    </article>
  );
}

export default GameInfo;
