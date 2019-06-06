import React from "react";

function Todo(props) {
  console.log("ITEM PROPS:", props)
  return (
    <div className="list-item">
    <p>{props.listItem.task}</p>
    </div>
  );
} 


export default Todo;