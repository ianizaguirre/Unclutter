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

class EditTaskForm extends Component {
  handleChange = event => {
    //console.log(event.currentTarget.value);
    // update that fish
    // 1. Take a copy of the current fish
    const updatedThisTask = {
      ...this.props.taskKey,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2. When change is done then send it back upstream
    this.props.updateTask(this.props.index, updatedThisTask);
  };

  render() {
    return (
      <Fragment>
        <ListItem>
          <FlexContainer>
            <Column1>
              <input type="text" name="name" onChange={this.handleChange} value={this.props.taskKey.name} />
            </Column1>
            <Column2>
              <p> {this.props.taskKey.created} </p>
            </Column2>
          </FlexContainer>
        </ListItem>
      </Fragment>
    );
  }
}

export default EditTaskForm;
