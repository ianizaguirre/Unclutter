import React, { Component } from 'react';
import base from '../base';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';
// import '../css/App.css';

import Header from '../components/Header';

import AddTaskForm from '../components/AddTaskForm';

import EditTaskForm from '../components/EditTaskForm';

// =============================================================================

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// const grid = 8;
const grid = 12;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // padding: grid * 2,
  margin: `0 0 2px 0`,
  // margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '#fff',
  // border: '3px solid red',
  border: '#e1e1e1',
  borderTopStyle: 'solid',
  // borderBottomStyle: 'solid',
  borderWidth: '1px',
  // padding-top: 11px,
  // paddingBottom: '11px',
  // marginBottom: '25px',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'white',
  // width: 250,
  padding: grid
});

// ============================================================================

const Wrapper = styled.div`
  background-color: #fafafa;
  overflow: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 33.3%;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: ${props => (props.primary ? '50%' : '15%')};
  }

  @media (max-width: 750px) {
    width: ${props => (props.primary ? '100%' : '0')};
  }
`;
const MiddleColumn = Column.extend`
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background-color: #ffffff;

  /* When Page is Full of Tasks give space under Add Task */
  padding-bottom: 3rem;

  /* @media (max-width: 700px) {
    width: 100%;
  } */
`;

const Gutter = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 21px;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  font-family: 'Open Sans', sans-serif;

  padding-left: 12px;
  font-weight: 400;
  letter-spacing: -1px;

  @media (max-width: 750px) {
    text-align: center;
    font-size: 25px;
  }
`;

const TodaysDate = styled.span`
  padding-left: 3px;
  color: #b1b1b1;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
`;
// ============================================================================

// ============================================================================

class App extends Component {
  state = {
    tasks: {},
    holdTasks: [],
    currentItem: '',
    holdRevertedTask: '',
    currentHoveredItem: '',
    mouseOnTask: '',
    openMenu: '',
    currentToggledMenu: '',
    addTaskFormIsAvailable: ''
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
    // =======================
    // If Task Toolbox is Open then Close it on Drag End
    this.handleUpdateCurrentItem(null);
    // console.log('DRAG END');
    // =======================
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
    const holdTasks = [...this.state.holdTasks];

    holdTasks.push(someTask);

    this.setState({
      holdTasks: holdTasks
    });
  };

  handleUpdateTask = (key, updatedThisTask) => {
    // console.log('=========> handleUpdateTask === App.js ===> KEY');
    // console.log(key);
    // console.log('-----------------------------------');
    // console.log('=========> handleUpdateTask === App.js ===> updatedThisTask');
    // console.log(updatedThisTask);
    // console.log('-----------------------------------');
    // 1. Take a copy of the current state (task)
    const holdTasks = [...this.state.holdTasks];
    // console.log('=========> handleUpdateTask === App.js ===> holdTasks');
    // console.log(holdTasks);
    // 2. Update that state
    holdTasks[key] = updatedThisTask;
    // 3. Set that to state
    this.setState({ holdTasks });
  };

  handleDeleteTask = key => {
    // 1. Take a copy of state
    const holdTasks = [...this.state.holdTasks];
    // 2. Update the State
    holdTasks[key] = null;
    // 3. Update State
    this.setState({
      holdTasks: holdTasks
    });
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  handleUpdateCurrentItem = index => {
    this.setState({
      currentItem: index
    });
  };
  handleHoldRevertedTask = revertFunk => {
    // console.log('========= handleHoldReveredTask');
    // console.log(revertFunk);

    this.setState({
      holdRevertedTask: revertFunk,
      addTaskFormIsAvailable: false
    });
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>
  handleMouseOnTask = mouseTaskCheck => {
    this.setState({
      mouseOnTask: mouseTaskCheck
    });
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>

  handleToggleMenu = (isOpenStatus, index) => {
    // console.log('THIS IS THE STATE OF =====> isOpenStatus');
    // console.log(isOpenStatus);

    // false or Null ?
    let isOpen = isOpenStatus ? index : false;
    // console.log('==============isOpen==============>>>>>>🏆🏆🏆🏆🏆🏆');
    // console.log(isOpen);

    this.setState({
      openMenu: isOpenStatus,
      currentToggledMenu: isOpen
    });
  };

  // ==========>>>>>>>>>>>>>>>>>>>>>>>>>
  handleCurrentHoveredItem = (index, isMouseOnIndex) => {
    let result = isMouseOnIndex ? index : null;
    // console.log('==============RESULT=======> 👽👽👽👽👽👽👽👽');
    // console.log(isMouseOnIndex);

    // console.log('========= handleCurrentHoveredItem');
    // console.log(index);

    this.setState({
      currentHoveredItem: index,
      currentToggledMenu: result
    });
  };
  // ======================
  handleCurrentItemsToggledMenu = index => {
    // console.log('=========  handleCurrentItemsToggledMenu 💩💩💩💩💩💩💩');
    // console.log(index);
    this.setState({
      currentToggledMenu: index
    });
  };
  // ==========>>>>>>>>>>>>>>>>>>>>>>>>>
  handleAddTaskToggle = event => {
    event.preventDefault();

    // Close Task Toolbox
    this.handleUpdateCurrentItem(null);

    let isOpen = this.state.addTaskFormIsAvailable ? false : true;

    // console.log(' handleAddTaskToggle ------- 💎💎💎💎💎💎💎💎💎💎💎💎');
    // console.log(isOpen);

    this.setState({
      addTaskFormIsAvailable: isOpen
    });
  };

  //================================

  render() {
    const todaysDate = new Date()
      .toString()
      .split(' ')
      .splice(0, 3) // .splice(1, 3) for Year
      .join(' ');
    return (
      <Wrapper>
        <Header />

        <FlexContainer>
          <Column />

          <MiddleColumn primary>
            <Gutter>
              <Title>
                Today <TodaysDate> {todaysDate} </TodaysDate>{' '}
              </Title>

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
                              onMouseEnter={this.handleHoverOn}
                              onMouseLeave={this.handleHoverOff}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            >
                              <EditTaskForm
                                taskKeysValue={this.state.holdTasks[index]}
                                indexman={index}
                                tasks={this.state.holdTasks}
                                updateTask={this.handleUpdateTask}
                                holdRevertedTask={this.handleHoldRevertedTask}
                                sendRevertedTask={this.state.holdRevertedTask}
                                updateCurrentItem={this.handleUpdateCurrentItem}
                                deleteTask={this.handleDeleteTask}
                                isAvailable={this.state.currentItem === index}
                                value={item.content}
                                creation={item.created}
                                currentHoveredItem={this.handleCurrentHoveredItem}
                                isMouseOnTask={this.state.currentHoveredItem === index}
                                mouseOnTask={this.state.mouseOnTask}
                                toggleMenu={this.handleToggleMenu}
                                openMenu={this.state.currentToggledMenu === index}
                                handleMouseOnTask={this.handleMouseOnTask}
                                currentItemsToggledMenu={this.handleCurrentItemsToggledMenu}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              <AddTaskForm
                addTask={this.handleAddTask}
                holdTasks={this.handleHoldTasks}
                addTaskToggle={this.handleAddTaskToggle}
                isAvailable={this.state.addTaskFormIsAvailable}
              />
            </Gutter>
          </MiddleColumn>

          <Column />
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default App;
