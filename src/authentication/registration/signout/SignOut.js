import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebase";
import { logOutUser } from "../../../features/user";
import { signOut } from "firebase/auth";

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

  return <button onClick={handleLougout}>SignOut</button>;
}

export default SignOut;
