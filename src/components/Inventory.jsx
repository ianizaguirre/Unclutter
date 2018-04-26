import React, { Component, Fragment } from 'react';

import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';

class Inventory extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {Object.keys(this.props.tasks).map(key => (
            <EditTaskForm key={key} index={key} taskKey={this.props.tasks[key]} updateTask={this.props.updateTask} />
          ))}
        </ul>

        <AddTaskForm addTask={this.props.addTask} />
      </Fragment>
    );
  }
}

export default Inventory;
