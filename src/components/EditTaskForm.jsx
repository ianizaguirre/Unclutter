import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
  border-color: #e1e1e1;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  margin-bottom: 15px;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const Column1 = styled.div`
  align-self: center;
  margin-right: auto;
`;
const Column2 = styled.div`
  align-self: center;
  margin-left: auto;
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
  background: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  visibility: ${props => (props.buttonIsVisible ? 'visible' : 'hidden')};
`;

class EditTaskForm extends Component {
  handleChange = event => {
    event.preventDefault();
    console.log('Change in Input Detected');

    // =======================
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
    // update that fish
    // 1. Take a copy of the current fish
    // const updatedThisTask = {
    //   ...this.props.taskKeysValue,
    //   [event.currentTarget.name]: event.currentTarget.value
    // };
    // // 2. When change is done then send it back upstream
    // this.props.updateTask(this.props.index, updatedThisTask);
  };

  handleFocus = event => {
    event.preventDefault();
    this.props.updateCurrentItem(this.props.index);
  };

  handleClickSave = event => {
    event.preventDefault();
    this.props.updateCurrentItem(null);
  };
  handleClickCancel = event => {
    event.preventDefault();
    this.props.updateCurrentItem(null);
  };

  render() {
    return (
      <Fragment>
        <ListItem>
          <FlexContainer>
            <Column1>
              <form>
                <input
                  type="text"
                  name="name"
                  onChange={null}
                  onFocus={this.handleFocus}
                  value={this.props.taskKeysValue.name}
                />

                <Button buttonIsVisible={this.props.isAvailable} onClick={this.handleClickSave}>
                  Save
                </Button>
                <Button buttonIsVisible={this.props.isAvailable} onClick={this.handleClickCancel}>
                  Cancel
                </Button>
              </form>
            </Column1>
            <Column2>
              <p> Date </p>
              <p> {this.props.taskKeysValue.created} </p>
            </Column2>
          </FlexContainer>
        </ListItem>
      </Fragment>
    );
  }
}

export default EditTaskForm;
