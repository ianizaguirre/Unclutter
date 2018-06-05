import React, { Component } from 'react';
import styled from 'styled-components';
import '../css/App.css';

import base from '../base';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';

import AddTaskForm from '../components/AddTaskForm';

import Inventory from './Inventory';
// import DragDropZone from './DragDropZone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// =============================================================================

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

// ============================================================================

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

// ========================
class App extends Component {
  state = {
    tasks: {},
    holdTasks: []
  };

  componentDidMount() {
    // Destructure this => ${this.props.match.params.storeId}
    const { params } = this.props.match;
    // === Save tasks state to Firebase ===
    this.ref = base.syncState(`${params.sessionId}/tasks`, {
      context: this,
      state: `tasks`
    });

    // === Save holdTasks state to Firebase ===
    this.ref = base.syncState(`${params.sessionId}/holdTasks`, {
      context: this,
      state: `holdTasks`,
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const holdTasks = reorder(this.state.holdTasks, result.source.index, result.destination.index);

    this.setState({
      holdTasks
    });
  };

  handleAddTask = someTask => {
    const tasks = { ...this.state.tasks };

    tasks[`task${Date.now()}`] = someTask;

    this.setState({
      tasks: tasks
    });
  };

  handleHoldTasks = someTask => {
    // === Copy tasks into holdTasks Array ==
    // const holdTasks = [ ...this.state.holdTasks ];
    // holdTasks.push(someTask);
    const holdTasks = [...this.state.holdTasks];
    holdTasks.push(someTask);
    // === end ===
    this.setState({
      holdTasks: holdTasks
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
    // ===========
    // const holdTasks = { ...this.state.holdTasks };
    // this.state.holdTasks.filter((_, i) => i !== index);

    // =========
    // 3. Update State
    this.setState({
      tasks
    });
  };

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

              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

              <DragDropContext onDragEnd={this.handleDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                      {this.state.holdTasks.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            >
                              Hi {item.id} ............. CONTENT: {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

              <h1> Test 2 with Array </h1>

              {this.state.holdTasks.map((item, index) => (
                <div key={item.id}>
                  Hi {item.id}
                  ..............CONTENT: {item.content}
                </div>
              ))}

              <p>==============================================</p>

              <Inventory tasks={this.state.tasks} updateTask={this.handleUpdateTask} />

              <AddTaskForm addTask={this.handleAddTask} holdTasks={this.handleHoldTasks} />
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
