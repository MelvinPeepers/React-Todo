import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: ''
        }
    }

    changeHandler = (event) => {
        this.setState({listItem: event.target.value})
    }

    render() {
        return (
            <form>
                <input value={this.state.listItem} 
                placeholder="New Item" 
                type="text" 
                onChange={this.changeHandler} 
                />

                <button>Add</button>
                <button>Clear All</button>
            </form>
        );
    }
}

export default TodoForm;