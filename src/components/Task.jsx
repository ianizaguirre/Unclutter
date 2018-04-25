import React, { Component } from 'react';

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

const Button = styled.button`
  color: #e44232;
  background-color: #ffffff;
  border-color: #e44232;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #ffffff;
    background-color: #e44232;
    outline: 0;
    border-color: transparent;
  }
`;

class Task extends Component {
  handleClick = () => {
    this.props.deleteTask(this.props.index);
    // console.log('Key=========> ' + this.props.index);
    // console.log('Button Delete Clicked');
  };

  render() {
    const { name } = this.props.iterateDetails;

    return (
      <ListItem>
        <FlexContainer>
          <Column1>
            <p> {name} </p>
          </Column1>
          <Column2>
            <Button onClick={this.handleClick}>Delete Task</Button>
          </Column2>
        </FlexContainer>
      </ListItem>
    );
  }
}
export default Task;
