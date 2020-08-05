import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        title: '',
        completed: false
    }

    //handler for onChange event
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //handler for onSubmit and onClick event
    submitData = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form className="form pl-5 pr-2 mb-1" onSubmit={this.submitData}>
                <div className="form-group row mx-auto" >
                    <input type="text" className="form-control col-9" name="title" onChange={this.updateState} placeholder="Enter your task here..." value={this.state.title} />
                    <button type="submit" className="btn btn-outline-primary ml-3" onClick={this.submitData}>Add</button>
                </div>
            </form>
        );
    }
}




export default AddTodo;