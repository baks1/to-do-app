import React from "react";
import "./List.css";

const List = props => (
  <ul>
    {props.tasks.map((task, index) => (
      <li key={index}>{task}</li>
    ))}
  </ul>
);

export default List;
