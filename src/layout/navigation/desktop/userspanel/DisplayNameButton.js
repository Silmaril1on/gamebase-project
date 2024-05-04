import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserSettings from "./UserSettings";

function DisplayNameButton() {
  const [settings, setSettings] = useState(false);

  const { userReg } = useSelector((store) => store.user);

  return (
    <div
      onClick={() => setSettings(!settings)}
      className="center flex-row w-max mr-3 ml-2"
    >
      <h1 className="hover:text-amber-400 font-bold text-xs duration-300">
        {userReg.userName}
      </h1>
      <img
        className="w-8 h-8 rounded-full"
        src={userReg.userAvatar}
        alt="user_avatar"
      />
      {settings && <UserSettings setSettings={setSettings} />}
    </div>
  );
}

export default DisplayNameButton;
