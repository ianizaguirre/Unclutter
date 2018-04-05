import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { name } = this.props.iterateDetails;

    return (
      <li>
        <p>{name}</p>

        <button> Remove Task </button>
      </li>
    );
  }
}
export default Task;
