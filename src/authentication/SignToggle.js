import React from "react";

function SignToggle({ active, setActive }) {
  return (
    <div className="text-xl *:font-light capitalize mb-10">
      {active ? (
        <h1>
          member already ?
          <strong onClick={() => setActive(0)} className="strong">
            sign in{" "}
          </strong>
        </h1>
      ) : (
        <h1>
          Dont Have an Account ?
          <strong onClick={() => setActive(1)} className="strong">
            sign up here
          </strong>
        </h1>
      )}
    </div>
  );
}

export default SignToggle;
