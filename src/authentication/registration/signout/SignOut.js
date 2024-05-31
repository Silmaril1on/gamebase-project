import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebase";
import { logOutUser } from "../../../features/user";
import { signOut } from "firebase/auth";
import { PiSignOutFill } from "react-icons/pi";

function SignOut() {
  const dispatch = useDispatch();

  const handleLougout = async () => {
    try {
      await signOut(auth);
      dispatch(logOutUser());
      console.log("you are logged out");
    } catch (error) {
      console.log("logout error", error);
    }
  };

  return (
    <div className=" w-full settings-style pr-0">
      <div className="center flex-row space-x-2 ml-2">
        <button onClick={handleLougout} className="font-primary text-xl">
          Sign Out
        </button>
        <PiSignOutFill size={20} />
      </div>
    </div>
  );
}

export default SignOut;
