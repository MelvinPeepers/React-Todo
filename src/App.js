import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todolist = [
  {
    task: "Make lunches",
    id: 1,
    completed: false
  },
  {
    task: "Do Dishes",
    id: 2,
    completed: false
  },
  {
    task: "Take out garbage",
    id: 3,
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
      currentToDoList: todolist
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Melvin's Super Fantastical Fun List!</h1>
          <TodoList todolist={this.state.currentToDoList} />
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;

// Display the items in the Todo List. - DONE 
// Add items to the list.
// Check items off the list.
