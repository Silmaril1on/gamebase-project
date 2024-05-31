import React from "react";
import { FaBug } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openBugModal, openModal } from "../../../../features/gamesSlice";

function Bug() {
  const dispatch = useDispatch();

  const { userReg } = useSelector((store) => store.user);

  return (
    <div
      onClick={() => {
        if (userReg?.email) {
          dispatch(openBugModal());
        } else {
          dispatch(openModal());
        }
      }}
      className="flexRow items-center text-cream px-2 py-2 cursor-pointer hover:bg-amber-400/40 duration-300"
    >
      <FaBug className="mr-2" />
      <h1 className="text-xs">report a bug</h1>
    </div>
  );
}

export default Bug;
