import React from "react";

function ErrorMsg({ children }) {
  return (
    <h1 className="bg-red-400 text-center rounded-xl capitalize text-xl text-red-800 font-bold p-4">
      {children}
    </h1>
  );
}

export default ErrorMsg;
