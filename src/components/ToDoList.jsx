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
        <Ul>{Object.keys(this.props.tasks).map(key => <Task key={key} iterateDetails={this.props.tasks[key]} />)}</Ul>
      </Fragment>
    );
  }
}

export default ToDoList;
