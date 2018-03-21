import React, { Component, Fragment } from 'react';

class ToDoItem extends Component {
  state = {
    userTask: ''
  };

  handleUserTaskInput = event => {
    this.setState({ userTask: event.target.value });
  };

  myInput = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();
    const entryContents = this.myInput.value.value;
    console.log(entryContents);
  };

  render() {
    return (
      <Fragment>
        <h3> To Do Item Component - EXAMPLE </h3>

        <form onSubmit={this.addToDoEntry}>
          <input
            onChange={this.handleUserTaskInput}
            value={this.state.userTask}
            type="text"
            ref={this.myInput}
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
