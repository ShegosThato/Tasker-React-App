import React from 'react'
import AddTodo from './AddTodo'

export default function Header({ addTodo }) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h1 className="display-2 mb-5">Tasker</h1>
            <AddTodo addTodo={addTodo} />
        </div>
    )
}
