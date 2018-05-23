import React, { Component, Fragment } from 'react';

// import EditTaskForm from '../components/EditTaskForm';

import DragDropZone from './DragDropZone';

//================
// index={key} // Returns ==> task1524783116410
// ===============
// taskKeysValue={this.props.tasks[key]}.........==> Returns ==>
// {created: "Apr 26", name: "eeeeedfssdsss"}
//================

// currentItem={this.state.currentItem}
//===========================================

// function handlePassAddTaskForm (props) {
//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// };

class Inventory extends Component {
  state = {
    currentItem: '',
    holdRevertedTask: '',
    dragDropZoneTasks: {}
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
            <DragDropZone
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

          <div> {this.props.children} </div>
        </ul>
      </Fragment>
    );
  }
}

export default Inventory;
