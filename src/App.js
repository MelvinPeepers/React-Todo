import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: [
        {
          task: "Do dishes",
          id: 1,
          completed: false
        },
        {
          task: "Make lunches",
          id: 2,
          completed: false
        }
      ],
      toDo: ""
    };
  }

  render() {
    return (
      <div className="container">
        <h1>My Todo List!</h1>
        <TodoList toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
