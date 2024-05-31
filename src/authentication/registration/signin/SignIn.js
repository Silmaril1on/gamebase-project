import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase";
import BorderSvg from "../../../components/BorderSvg";
import ErrorMsg from "../../ErrorMsg";

function SignIn({ setActive }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError("failed to sign in, INVALID CREDENTIAL");
      console.log(e.message);
    }
  };

  return (
    <div id="0" className="w-full md:w-2/4 px-5">
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label htmlFor="email">Email Address</label>
          <input
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <div className="center">
          <h1 className="font-light">
            Forgot Password?{" "}
            <strong onClick={() => setActive(2)} className="strong">
              RESET
            </strong>
          </h1>
        </div>
        <div className="w-full center mt-5">
          <button className="cream-button">
            <BorderSvg />
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
