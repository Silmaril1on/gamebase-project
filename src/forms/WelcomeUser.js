import React, { useState, useEffect } from "react";
import LogoOne from "../components/LogoOne";
import AnimatedLetters from "../components/AnimatedLetters";
import { useDispatch } from "react-redux";
import { registration } from "../features/gamesSlice";

function WelcomeUser({ user }) {
  const dispatch = useDispatch();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    dispatch(registration());
    setInterval(() => {
      setMount(true);
    }, 5500);
  }, [dispatch]);

  return (
    <section className="text-cream w-full flexCol items-center justify-around h-full">
      <div className="w-64 h-64">
        <LogoOne />
      </div>
      {mount && (
        <div className="w-11/12 md:w-2/4 flexCol items-center">
          <h1 className="text-2xl">welcome</h1>
          <AnimatedLetters
            text={user.name}
            className="font-secondary uppercase text-4xl"
          />
          <h4 className="font-light font-primary">{user.email}</h4>
        </div>
      )}
    </section>
  );
}

export default WelcomeUser;
