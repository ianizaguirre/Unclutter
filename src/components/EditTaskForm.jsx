import React, { Component } from 'react';
import styled from 'styled-components';

import dragicon from '../drag-icon.png';
import ToggleMenu from './ToggleMenu';

const Form = styled.form`
  /* background: red; */
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    /* background: blue;
    opacity: 0.1; */
    right: auto;
    left: -10%;
    top: ${props => (props.toolboxIsVisible ? '-28%' : '-51%')};
    height: ${props => (props.toolboxIsVisible ? '113px' : '85px')};
    width: 118%;
  }

  @media (max-width: 750px) {
    &:before {
      left: -10%;
      top: ${props => (props.toolboxIsVisible ? '-18%' : '-23%')};
      height: ${props => (props.toolboxIsVisible ? '155px' : '118px')};
    }
  }
`;

const ListItemsWrapper = styled.div`
  list-style: none;
`;
const FlexContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexContainerColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  width: 75%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;
const FlexContainerRow = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  flex-direction: row;

  @media (max-width: 750px) {
    margin-top: 4px;
    width: 100%;
    justify-content: flex-end;
  }
`;
const Column1 = styled.div`
  margin-right: auto;
  flex: 1 0 50%;
  width: ${props => (props.primary ? '100%' : 'auto')};

  padding-right: 10px;

  @media (max-width: 750px) {
    padding-right: 0;
  }
`;

const Column2 = Column1.extend`
  /* Date */
  flex: none;
  margin-right: 0;
`;

const DateWrap = styled.div`
  /* Date */
  position: relative;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #535a5b;

  &:after {
    content: '';
    position: absolute;
    border-bottom: solid 1px #535a5b;
    width: 40px;
    padding-top: 5px;
    height: auto;
  }
`;

const Column2Ellipise = styled.div`
  /* flex: auto; */
  padding-left: 10px;
`;

const Column3 = Column1.extend`
  flex: 0 1 100%;
  margin-top: 4px;
`;

const Input = styled.input`
  position: relative;
  font-size: 14px;
  color: #535a5b;
  min-width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  overflow: hidden;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;
// ================================================
const DragIconImg = styled.img`
  /* width: 2em; */
  width: 15px;
  position: absolute;
  cursor: pointer;
  margin-top: 13px;
  margin-left: -19px;
  opacity: 0.5;
  /* transform: rotate(90deg); */
  display: ${props => (props.mouseOnTaskCheck ? 'inline-block' : 'none')};
  /* display: 'inline-block'; */

  /* ALWAYS Show Drag Icon when viewing from phone */
  @media (max-width: 750px) {
    display: none;
  }
`;

// ================================================

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 12px;
  line-height: 20px;
  border: ${props => (props.cancel ? '1px solid transparent' : '1px solid')};
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  letter-spacing: 1px;

  margin-right: 0.5em;
  padding: 0.375rem 0.75rem;

  font-weight: ${props => (props.cancel ? '500' : '500')};
  font-family: 'Open Sans', sans-serif;

  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};

  &:hover {
    opacity: ${props => (props.cancel ? '1' : '0.8')};
    text-decoration: ${props => (props.cancel ? 'underline' : 'none')};
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
//=========================
const FlexContainerWrapperToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonDel = styled.button`
  color: #333;
  background-color: transparent;
  border: transparent;
  font-size: 13px;
  line-height: 15px;
  margin: 0 auto;
  width: 100%;
  padding: 8px 0px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    color: #333;
    background-color: #e9e8e8;
    outline: 0;
    border-color: transparent;
  }

  /* @media (max-width: 750px) {

  } */
`;

const TaskNumber = styled.div`
  font-size: 15px;
  color: #bebdbe;

  position: absolute;

  margin-left: -16px;
  margin-top: -8px;

  /* &:hover {
    color:
  } */
`;

// ================================================
// console.log(event.currentTarget); // ==> returns => whole <input... tag
// =======================
// console.log(event.currentTarget.name); // ==> returns => name (1word)
// =======================
// console.log(event.currentTarget.value); // ==> returns => whole input value
// =======================
// console.log(this.props.index); // ==> returns => task1524783116410
// =============================
// console.log(this.props.taskKeysValue); // ==> returns =>
// {created: "Apr 26", name: "eeeeedfssdsss"}
// =======================
// console.log(this.props.taskKeysValue.name); // ==> returns =>
// whole input value
// ================================================

class EditTaskForm extends Component {
  handleChange = event => {
    event.preventDefault();
    // console.log('On Change Hit');
    // console.log('Change in Input Detected');
    // update that Task
    // 1. Take a copy of the current task
    const updatedThisTask = {
      ...this.props.taskKeysValue, //{created: "Apr 26", content: "eeeeedfssdsss"}
      [event.currentTarget.name]: event.currentTarget.value
    }; // END OF OBJECT stored in variable

    // console.log('this.props.taskKeysValue');
    // console.log(this.props.taskKeysValue);
    // console.log('=======');
    // console.log('updatedThisTask');
    // console.log(updatedThisTask);
    // console.log('XXXXXXXXXXXXXXXXXXXXXXXX');
    // console.log('this.props.indexman');
    // console.log(this.props.indexman);

    // 2. When change is done then send it back upstream
    this.props.updateTask(this.props.indexman, updatedThisTask);
  };

  handleFocus = event => {
    event.preventDefault();

    this.props.updateCurrentItem(this.props.indexman);
    // console.log('Yooo is this the index inside of handleFocus()');
    // console.log(this.props.indexman);

    //  ------------------
    const taskBeforeEdits = {
      ...this.props.taskKeysValue,
      [event.currentTarget.name]: event.currentTarget.value
    };

    // console.log('Inside of handleFocus() ====> event.currentTarget.name');
    // console.log(event.currentTarget.name);

    // console.log('Inside of handleFocus() ====> event.currentTarget.value');
    // console.log(event.currentTarget.value);

    // console.log('Inside of handleFocus() ====> taskBeforeEdits');
    // console.log(taskBeforeEdits);

    this.props.holdRevertedTask(taskBeforeEdits);
  };

  handleClickSave = event => {
    event.preventDefault();
    this.props.updateCurrentItem(null);
  };

  handleClickCancel = event => {
    event.preventDefault();
    this.props.updateCurrentItem(null);

    //  ------------------

    // Send back upstream
    this.props.updateTask(this.props.indexman, this.props.sendRevertedTask);
    // console.log('Clicked Cancel ===========xoxoxo========>');
    // console.log(revertThisTask);
  };

  handleClickDelete = event => {
    event.preventDefault();
    // console.log('=============== INSIDE handleClickDELETE ====>');
    // console.log(this.props.indexman);
    this.props.deleteTask(this.props.indexman);
  };

  handleHoverOn = event => {
    event.preventDefault();

    this.props.currentHoveredItem(this.props.indexman, this.props.openMenu);

    const mouseOnTaskCheck = true;

    this.props.handleMouseOnTask(mouseOnTaskCheck);

    // console.log('STATE of mouseOnTask === mouseOnTaskCheck ====> 🔥');
    // console.log(mouseOnTaskCheck);
  };

  handleHoverOff = event => {
    event.preventDefault();

    this.props.currentHoveredItem(false, this.props.openMenu);

    const mouseOnTaskCheck = false;

    this.props.handleMouseOnTask(mouseOnTaskCheck);

    // console.log('STATE of mouseOnTask ==== mouseOnTaskCheck ====> 🔥');
    // console.log(mouseOnTaskCheck);
  };

  render() {
    return (
      <Form
        autoComplete="off"
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
        toolboxIsVisible={this.props.isAvailable}
      >
        <ListItemsWrapper>
          <TaskNumber>{this.props.indexman + 1}</TaskNumber>
          <FlexContainerWrapper>
            <DragIconImg src={dragicon} alt="" mouseOnTaskCheck={this.props.isMouseOnTask} />
            <FlexContainerColumn>
              <Column1 primary>
                <Input
                  type="text"
                  name="content"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  value={this.props.value}
                />
              </Column1>
              <Column3>
                <Button buttonIsVisible={this.props.isAvailable} onClick={this.handleClickSave}>
                  Save
                </Button>
                <Button cancel buttonIsVisible={this.props.isAvailable} onClick={this.handleClickCancel}>
                  Cancel
                </Button>
              </Column3>
            </FlexContainerColumn>
            <FlexContainerRow>
              <Column2>
                <DateWrap> {this.props.creation} </DateWrap>
              </Column2>
              <Column2Ellipise>
                <FlexContainerWrapperToggleMenu>
                  <ToggleMenu
                    isAvailable={this.props.isAvailable}
                    mouseOnTask={this.props.mouseOnTask}
                    openMenu={this.props.openMenu}
                    toggleMenu={this.props.toggleMenu}
                    indexman={this.props.indexman}
                    currentItemsToggledMenu={this.props.currentItemsToggledMenu}
                  >
                    <ButtonDel buttonIsVisible={true} onClick={this.handleClickDelete}>
                      Delete task
                    </ButtonDel>
                  </ToggleMenu>
                </FlexContainerWrapperToggleMenu>
              </Column2Ellipise>
            </FlexContainerRow>
          </FlexContainerWrapper>
        </ListItemsWrapper>
      </Form>
    );
  }
}

export default EditTaskForm;
