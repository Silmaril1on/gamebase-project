import React from "react";

function TextError(props) {
  return (
    <div className="text-red-600 font-primary font-bold my-2 pl-2">
      {props.children}
    </div>
  );
}

export default TextError;
