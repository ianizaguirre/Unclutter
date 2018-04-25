import React, { Component, Fragment } from 'react';

import Task from './Task';

import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
`;

class ToDoList extends Component {
  render() {
    return (
      <Fragment>
        <Ul>
          {Object.keys(this.props.tasks).map(key => (
            <Task key={key} index={key} iterateDetails={this.props.tasks[key]} deleteTask={this.props.deleteTask} />
          ))}
        </Ul>
      </Fragment>
    );
  }
}

export default ToDoList;
