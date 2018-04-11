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
class Task extends Component {
  render() {
    const { name } = this.props.iterateDetails;

    return (
      <ListItem>
        <FlexContainer>
          <Column1>
            <p> {name} </p>
          </Column1>
          <Column2>
            <button> Remove Task </button>
          </Column2>
        </FlexContainer>
      </ListItem>
    );
  }
}
export default Task;
