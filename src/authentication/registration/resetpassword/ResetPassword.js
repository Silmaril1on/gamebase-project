import React, { useState } from "react";
import BorderSvg from "../../../components/BorderSvg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import ErrorMsg from "../../ErrorMsg";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setMessage("check your inbox for instructions");
    } catch (error) {
      setError("failed to reset password");
      console.log(error);
    }
    setLoading(true);
  };

  return (
    <div id="2" className="w-full md:w-2/4">
      <div>
        <h1 className="text-2xl font-bold py-2">Password Reset</h1>
      </div>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {message && (
        <h1 className="bg-green-300 text-green-900 font-bold p-4 text-xl">
          Check your inbox for reseting password
        </h1>
      )}
      <form onSubmit={handleResetPassword} className=" w-full">
        <div className="flex flex-col py-2">
          <label htmlFor="email">Email Address</label>
          <input
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>

        <section className="center mt-5">
          <button
            disabled={loading}
            type="submit"
            className="cream-button w-44"
          >
            <BorderSvg />
            Reset Password
          </button>
        </section>
      </form>
    </div>
  );
}

export default ResetPassword;
