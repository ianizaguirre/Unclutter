import React, { Component, Fragment } from 'react';

import EditTaskForm from '../components/EditTaskForm';

class Inventory extends Component {
  state = {
    currentItem: '',
    holdRevertedTask: ''
  };

  handleCurrentItem = index => {
    this.setState({
      currentItem: index
    });
  };

  handleHoldRevertedTask = revertFunk => {
    this.setState({
      holdRevertedTask: revertFunk
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
              isAvailable={this.state.currentItem === key}
              holdRevertedTask={this.handleHoldRevertedTask}
              sendRevertedTask={this.state.holdRevertedTask}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Inventory;
