import React, { Component } from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    state = {
        // this is where the data goes
        list: ['clean the house', 'buy milk'],
        todo: ''
    };

    createNewToDoItem = () => {
        this.setState(({ list, todo }) => ({
            list: [...list, todo],
            todo: ''
        }));
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };

    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo" />
                <h1 className="ToDo-Header">React To Do</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                        {this.state.list.map((item, index) => {
                            return (
                                <ToDoItem
                                    key={index}
                                    index={index}
                                    item={item}
                                    deleteItem={this.deleteItem}
                                />
                            );
                        })}
                    </div>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.handleInput}
                        onKeyPress={this.handleKeyPress}
                    />
                    <div className="ToDo-Add" onClick={this.createNewToDoItem}>
                        +
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
