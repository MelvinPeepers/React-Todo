// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  // console.log(props);
  return (
      <div className="todo-list">
        { props.todolist.map( (item) => {
          return (
            <Todo listItem={item} />
          );
        })}
      </div>
  );
}

export default TodoList;

