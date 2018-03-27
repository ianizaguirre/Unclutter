import React, { Component, Fragment } from 'react';

class AddTaskForm extends Component {
  nameRef = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();

    const userTaskEntry = {
      name: this.nameRef.value.value
    };

    this.props.addTask(userTaskEntry);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <h3> AddTaskForm:</h3>

        <form onSubmit={this.addToDoEntry}>
          <input
            name="name"
            type="text"
            ref={this.nameRef}
            placeholder="Enter a Task"
            required
          />

          <button type="submit"> Add Task → </button>
        </form>
      </Fragment>
    );
  }
}

export default AddTaskForm;
