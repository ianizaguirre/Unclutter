import React, { Component } from 'react';

import styled from 'styled-components';

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
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexContainerColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;
const FlexContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
const Column1 = styled.div`
  margin-right: auto;
  flex: 1 0 50%;
`;

const Column2 = Column1.extend`
  font-size: 13px;
  color: #535a5b;
  flex: none;

  &:after {
    content: '';
    position: absolute;
    border-bottom: solid 1px #535a5b;
    width: 40px;
    padding-top: 5px;
    height: auto;
  }
`;

const Column3 = Column1.extend`
  flex: 0 1 100%;
  margin-top: 4px;
`;

const Input = styled.input`
  font-size: 14px;
  color: #535a5b;
`;
// const Button = styled.button`
//   color: #e44232;
//   background-color: #ffffff;
//   border-color: #e44232;
//   font-size: 13px;
//   line-height: 15px;
//   font-weight: 500;
//   border: 2px solid;
//   border-radius: 4px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: all 0.25s ease;

//   &:hover {
//     color: #ffffff;
//     background-color: #e44232;
//     outline: 0;
//     border-color: transparent;
//   }
// `;

// onBlur={() =>
//   console.log(
//     this.props.currentItem +
//       '=' +
//       this.props.index +
//       '....buttonIsVisible=isAvailable= ' +
//       this.props.isAvailable
//   )
// }
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 13px;
  line-height: 20px;
  font-weight: ${props => (props.cancel ? '400' : '500')};
  border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
  border-radius: 4px;
  cursor: pointer;

  margin-right: 0.5em;
  padding: 0.25em 0.7em;

  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};
`;
//visibility: ${props => (props.buttonIsVisible ? 'visible' : 'hidden')};

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
    console.log('Change in Input Detected');
    // update that Task
    // 1. Take a copy of the current task
    const updatedThisTask = {
      ...this.props.taskKeysValue, //{created: "Apr 26", content: "eeeeedfssdsss"}
      [event.currentTarget.name]: event.currentTarget.value
    }; // END OF OBJECT stored in variable

    // 2. When change is done then send it back upstream
    this.props.updateTask(this.props.index, updatedThisTask);
  };

  handleFocus = event => {
    event.preventDefault();

    this.props.updateCurrentItem(this.props.index);

    //  ------------------
    const taskBeforeEdits = {
      ...this.props.taskKeysValue,
      [event.currentTarget.name]: event.currentTarget.value
    };

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
    this.props.updateTask(this.props.index, this.props.sendRevertedTask);
    console.log('Clicked Cancel ===========xoxoxo========>');
    // console.log(revertThisTask);
  };

  render() {
    return (
      <form>
        <ListItemsWrapper>
          <FlexContainerWrapper>
            <FlexContainerColumn>
              <Column1>
                <Input
                  type="text"
                  name="content"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  value={this.props.taskKeysValue.content}
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
                <p> {this.props.taskKeysValue.created} </p>
              </Column2>
            </FlexContainerRow>
          </FlexContainerWrapper>
        </ListItemsWrapper>
      </form>
    );
  }
}

export default EditTaskForm;
