import React, { useState } from "react";
import SignToggle from "../SignToggle";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";
import ResetPassword from "./resetpassword/ResetPassword";

function Registration({ loading, setLoading }) {
  const [active, setActive] = useState(0);

  return (
    <div className="center flex-col h-full w-full">
      <SignToggle active={active} setActive={setActive} />
      {active === 0 ? (
        <SignIn setActive={setActive} />
      ) : active === 1 ? (
        <SignUp loading={loading} setLoading={setLoading} />
      ) : active === 2 ? (
        <ResetPassword />
      ) : (
        ""
      )}
    </div>
  );
}

export default Registration;
