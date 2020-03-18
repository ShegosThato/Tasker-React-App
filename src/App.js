import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';


class App extends Component {

  state = {
    todos: [
      { id: 1, title: 'Master Reactjs', completed: false },
      { id: 2, title: 'Stream your workflow', completed: false },
      { id: 3, title: 'Formalise lytyear softworks', completed: false },
    ]
  }

  //add new todo to the state
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  //remove todo from the state
  deleteTodo = (id) => {
    const newlist = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: newlist
    });
  }

  //toggle is complete
  isComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })

    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header addTodo={this.addTodo} />
        <div className="container main-section">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} isComplete={this.isComplete} />
        </div>

      </div>
    )
  }
}

export default App