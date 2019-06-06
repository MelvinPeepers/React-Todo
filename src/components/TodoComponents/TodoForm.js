import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        // console.log("LIST ITEM PROPS", props)
        this.state = {
            listItem: ''
        }
    }

    changeHandler = (event) => {
        this.setState({listItem: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        // console.log("LIST ITEM PROPS", this.props)
        this.props.addNewItem(this.state.listItem)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
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