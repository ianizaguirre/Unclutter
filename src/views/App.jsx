import React, { Component } from 'react';
import styled from 'styled-components';
import '../css/App.css';

import base from '../base';

import Header from '../components/Header';
import ToDoList from '../components/ToDoList';

import Inventory from './Inventory';
import AddTaskForm from '../components/AddTaskForm';

// import DragDropZone from './DragDropZone';

const Wrapper = styled.div`
  background-color: #fafafa;
`;
const Title = styled.h3`
  font-weight: 300;
  font-size: 21px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 33.3%;
  min-height: 100vh;
`;
const MiddleColumn = Column.extend`
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background-color: #ffffff;
`;
const Gutter = styled.div`
  width: 90%;
  margin: 0 auto;
`;
// =========================
// const DropZoneList = function ({ zoneTask, children }) {
//   return (
//     <div>
//       {zoneTask}
//       {children}
//     </div>
//   );
// }

// ========================
class App extends Component {
  state = {
    tasks: {}
    // quota: {}
  };

  componentDidMount() {
    // Destructure this => ${this.props.match.params.storeId}
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.sessionId}/tasks`, {
      context: this,
      state: `tasks`
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleAddTask = someTask => {
    const tasks = { ...this.state.tasks };

    tasks[`task${Date.now()}`] = someTask;

    this.setState({
      tasks: tasks
    });
  };

  handleUpdateTask = (key, updatedThisTask) => {
    // 1. Take a copy of the current state (task)
    const tasks = { ...this.state.tasks };
    // 2. Update that state
    tasks[key] = updatedThisTask;
    // 3. Set that to state
    this.setState({ tasks });
  };

  handleDeleteTask = key => {
    // 1. Take a copy of state
    const tasks = { ...this.state.tasks };
    // 2. Update the State
    tasks[key] = null;
    // 3. Update State
    this.setState({
      tasks
    });
  };

  // addToQuota = key => {
  //   const quota = { ...this.state.quota };

  //   quota[key] = quota[key] + 1 || 1;

  //   this.setState({
  //     quota: quota
  //   });
  // };

  render() {
    return (
      <Wrapper>
        <Header />

        <FlexContainer>
          <Column>Column1</Column>
          <MiddleColumn>
            <Gutter>
              <Title>Today</Title>
              <ToDoList tasks={this.state.tasks} deleteTask={this.handleDeleteTask} />
              <p>============================================</p>
              <Inventory tasks={this.state.tasks} updateTask={this.handleUpdateTask}>
                <AddTaskForm addTask={this.handleAddTask} />
              </Inventory>
              <p>===============--------------=============================</p>
            </Gutter>
          </MiddleColumn>
          <Column>Column3</Column>
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default App;
