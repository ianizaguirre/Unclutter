import React, { Component, Fragment } from 'react';

class AddTaskForm extends Component {
  myInput = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();
    const userEntryContent = this.myInput.value.value;
    this.props.addTask(userEntryContent);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <h3> AddTaskForm:</h3>

        <form onSubmit={this.addToDoEntry}>
          <input type="text" ref={this.myInput} placeholder="Enter a Task" required />

          <button type="submit"> Add Task → </button>
        </form>
      </Fragment>
    );
  }
}

export default AddTaskForm;