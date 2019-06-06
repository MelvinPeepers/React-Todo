import React from 'react';


const todolist = [
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
          <h1>My Todo List!</h1>
        </div>
      </div>
    );
  }
}

export default App;

// Display the items in the Todo List.
// Add items to the list.
// Check items off the list.
