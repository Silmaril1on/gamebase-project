import React, { useState, useEffect } from "react";
import LogoOne from "../components/LogoOne";
import AnimatedLetters from "../components/AnimatedLetters";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../features/gamesSlice";

function WelcomeUser() {
  const dispatch = useDispatch();
  const [mount, setMount] = useState(false);
  const { newUser } = useSelector((store) => store.user);

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
            text={newUser[0].name}
            className="font-secondary uppercase text-4xl"
          />
          <h4 className="font-light font-primary">{newUser[0].email}</h4>
        </div>
      )}
    </section>
  );
}

export default WelcomeUser;
