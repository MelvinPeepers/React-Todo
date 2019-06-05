import React from "react";

const Todo = props => {
  return (
    <ul>
      <li>{props.toDo.task}</li>
    </ul>
  );
};


export default Todo;