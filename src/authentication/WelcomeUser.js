import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AnimatedLetters from "../components/AnimatedLetters";
import LogoTwo from "../components/LogoTwo";
import { useDispatch } from "react-redux";
import { registration } from "../features/gamesSlice";

function WelcomeUser() {
  const { userReg } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registration());
  }, [dispatch]);

  return (
    <div className="w-full h-full center flex-col">
      <div className="w-44 h-auto">
        <LogoTwo />
      </div>
      <article className="center flex-col">
        <h1>welcome</h1>
        {userReg.userName ? (
          <AnimatedLetters
            className="text-3xl font-secondary"
            text={userReg.userName}
          />
        ) : (
          ""
        )}
        <h1>{userReg.email}</h1>
      </article>
    </div>
  );
}

export default WelcomeUser;
