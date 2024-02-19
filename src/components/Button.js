import React from "react";
import BorderSvg from "./BorderSvg";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="relative cream-button w-auto">
      {children}
      <BorderSvg />
    </button>
  );
}

export default Button;
