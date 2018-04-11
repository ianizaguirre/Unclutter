import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import '../css/App.css';

import Header from '../components/Header';
import TodayView from '../components/TodayView';
import ToDoList from '../components/ToDoList';

const Wrapper = styled.div`
  background-color: #fafafa;
`;
const Title = styled.h2`
  font-weight: 300;
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

class App extends Component {
  state = {
    tasks: {},
    quota: {}
  };

  handleAddTask = someTask => {
    const tasks = { ...this.state.tasks };

    tasks[`task${Date.now()}`] = someTask;

    this.setState({
      tasks: tasks
    });
  };

  addToQuota = key => {
    const quota = { ...this.state.quota };

    quota[key] = quota[key] + 1 || 1;

    this.setState({
      quota: quota
    });
  };

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Header />

          <FlexContainer>
            <Column>Column1</Column>
            <MiddleColumn>
              <Gutter>
                <Title>Today</Title>
                <ToDoList tasks={this.state.tasks} />
                <TodayView addTask={this.handleAddTask} />
              </Gutter>
            </MiddleColumn>
            <Column>Column3</Column>
          </FlexContainer>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
