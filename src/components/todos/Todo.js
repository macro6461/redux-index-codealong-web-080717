import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <div>
        <li key={this.props.key} onClick={this.props.handleDelete}>{this.props.text}</li>
      </div>
    );
  }
};

export default Todo;
