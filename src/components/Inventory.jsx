import React, { Component, Fragment } from 'react';

import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
//================
// index={key} // Returns ==> task1524783116410
// ===============
// taskKeysValue={this.props.tasks[key]}.........==> Returns ==>
// {created: "Apr 26", name: "eeeeedfssdsss"}
//================

class Inventory extends Component {
  state = {
    currentItem: ''
  };

  handleCurrentItem = index => {
    this.setState({
      currentItem: index
    });
  };

  render() {
    return (
      <Fragment>
        <ul>
          {Object.keys(this.props.tasks).map(key => (
            <EditTaskForm
              key={key}
              index={key}
              taskKeysValue={this.props.tasks[key]}
              updateTask={this.props.updateTask}
              updateCurrentItem={this.handleCurrentItem}
              isNotAvailable={this.state.currentItem !== key}
              currentItem={this.state.currentItem}
            />
          ))}
        </ul>

        <AddTaskForm addTask={this.props.addTask} />
      </Fragment>
    );
  }
}

export default Inventory;
