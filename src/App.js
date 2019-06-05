import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";


const todos = [
  {
    task: "Do dishes",
    id: 1,
    completed: false
  },
  {
    task: "Make lunches",
    id: 2,
    completed: false
  },
  {
    task: "Pack bags",
    id: 3,
    completed: false
  },
  {
    task: "Pick out cloths",
    id: 4,
    completed: false
  },
  {
    task: "Brush Teeth",
    id: 5,
    completed: false
  },
  {
    task: "Go to bed",
    id: 6,
    completed: false
  },

];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosOnState: todos
    }
  }

  render() {
    return (
      <div>
        <h1>My Todo App!</h1>
        {/* <div className="todo-list">
          {this.state.todosOnState.map(todoList => (
            <App todo={todoList} />
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
