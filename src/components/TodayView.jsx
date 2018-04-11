import React, { Component, Fragment } from 'react';

import AddTaskForm from './AddTaskForm';

class TodayView extends Component {
  render() {
    return (
      <Fragment>
        <AddTaskForm addTask={this.props.addTask} />
      </Fragment>
    );
  }
}

export default TodayView;
