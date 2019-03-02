import React from "react";
import "./Buttons.css";

const Buttons = props => {
  return (
    <>
      <button onClick={props.add}>Add</button>
      <button onClick={props.delete}>Remove</button>
      <button onClick={props.clear}>Clear</button>
    </>
  );
};

export default Buttons;
