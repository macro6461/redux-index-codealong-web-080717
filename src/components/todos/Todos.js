import React, { Component } from 'react';
import Todo from './Todo'

class Todos extends Component {

  handleDelete = (event, index) =>{
    debugger
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      todo: this.props.store,
    })
  }

  render() {
    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo key={index} text={todo.text} handleDelete={this.handleDelete}/>
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
