import React, { Component } from 'react';
import styled from 'styled-components';

import ToggleMenu from './ToggleMenu';

const ListItemsWrapper = styled.li`
  list-style: none;
  border-color: #e1e1e1;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 15px;
`;
const FlexContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
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
`;

const Column2 = Column1.extend`
  /* Date */
  margin-right: 0;
  font-size: 13px;
  color: #535a5b;
  flex: none;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

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

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 13px;
  line-height: 20px;
  border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
  border-radius: 4px;
  cursor: pointer;

  margin-right: 0.5em;
  padding: 0.25em 0.7em;

  font-weight: ${props => (props.cancel ? '400' : '600')};
  font-family: 'Open Sans', sans-serif;

  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
//=========================
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
const FlexContainerWrapperTEST = styled.div`
  display: flex;
  flex-direction: column;
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
    // console.log('Key=========> ' + this.props.index);
    // console.log('Button Delete Clicked');
  };

  render() {
    return (
      <form autoComplete="off">
        <ListItemsWrapper>
          <FlexContainerWrapper>
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
                <p> {this.props.creation} </p>
              </Column2>
              <Column2Ellipise>
                <FlexContainerWrapperTEST>
                  <ToggleMenu isAvailable={this.props.isAvailable}>
                    <ButtonDel buttonIsVisible={true} onClick={this.handleClickDelete}>
                      Delete task
                    </ButtonDel>
                  </ToggleMenu>
                </FlexContainerWrapperTEST>
              </Column2Ellipise>
            </FlexContainerRow>
          </FlexContainerWrapper>
        </ListItemsWrapper>
      </form>
    );
  }
}

export default EditTaskForm;
