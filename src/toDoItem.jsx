import React, { Component, Fragment } from 'react';

class ToDoItem extends Component {
  state = {
    userTask: ''
  };

  handleUserTaskInput = event => {
    this.setState({ userTask: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <h1> TO DO ITEM EXAMPLE </h1>

        <form onSubmit={this.addToDoEntry}>
          <input
            onChange={this.handleUserTaskInput}
            value={this.state.userTask}
            type="text"
            placeholder="Enter a Task"
            required
          />

          <button type="submit"> Add Task → </button>
        </form>
      </Fragment>
    );
  }
}

export default ToDoItem;
