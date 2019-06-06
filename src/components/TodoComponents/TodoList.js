// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

function TodoList(props) {
  console.log(props);
  return (
      <div className="todo-list">
        { props.todolist.map( (item) => {
          return <h3>{item.task}</h3>
        })}
      </div>
  );
}

export default TodoList;

