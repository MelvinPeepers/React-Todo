import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/normalize.css';
import './components/TodoComponents/Todo.css';



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

  addItem = (newItem)  => {
    const newTodoItem = {
      task: newItem,
      id: Date.now(),
      completed: false
    }

    this.setState({currentToDoList: [...this.state.currentToDoList, newTodoItem]})
  }

  toggleItem = id => {
    const newList = this.state.currentToDoList.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.completed
        };
        return newObj;
      } else {
        return item;
      }
    });

    this.setState({ currentToDoList: newList });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Melvin's Super Fantastical Fun List!</h1>
        </div>
        <div className="toDo-List">
          <TodoList todolist={this.state.currentToDoList} toggleItem={this.toggleItem} />
        </div>
        <div className="border-line">
        <span></span>
        </div>
        <div className="toDo-Form">
          <TodoForm addNewItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;

// Display the items in the Todo List. - DONE 
// Add items to the list. - DONE
// Check items off the list.
