import React, { Component } from 'react';

class TodoItem extends Component {

    styleTitle = () => {
        return {

            textDecoration: this.props.todo.completed ? 'line-throught !important' : 'none !important'
        }

    }

    render() {
        const { title, id } = this.props.todo;

        return (
            <li className="list-group-item d-flex justify-content-between align-items-center shadow-lg p-3 mb-2 bg-white rounded" >
                <span>{title}</span>
                <button className="btn btn-danger btn-sm rounded-pill" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </li>
        );
    }
}

export default TodoItem;