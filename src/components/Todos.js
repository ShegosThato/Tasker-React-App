import React from 'react';
import TodoItem from './TodoItem';

function Todos({ todos, deleteTodo, isComplete }) {
    const list = todos.map(todo => {
        return (
            <ul className="list-group" key={todo.id}>
                <TodoItem todo={todo} deleteTodo={deleteTodo} isComplete={isComplete} />
            </ul>
        )
    });
    return (
        <div className="taskList p-3">
            {list}
        </div>
    )
}

export default Todos;