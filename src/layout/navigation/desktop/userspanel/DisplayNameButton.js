import React from "react";
import { useSelector } from "react-redux";

function DisplayNameButton() {
  const { userReg } = useSelector((store) => store.user);

  return (
    <div className="center flex-row w-max xl:mr-3 ml-2 space-x-1">
      <h1 className="hover:text-amber-400 font-bold text-xs duration-300">
        {userReg.userName}
      </h1>
      <img
        className="w-8 h-8 rounded-full object-cover"
        src={userReg.userAvatar}
        alt="user_avatar"
      />
    </div>
  );
}

export default DisplayNameButton;
