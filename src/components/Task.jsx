import React, { Component } from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
  border-color: #e1e1e1;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 33.3%;
`;
class Task extends Component {
  render() {
    const { name } = this.props.iterateDetails;

    return (
      <ListItem>
        <FlexContainer>
          <Column>
            <p>{name}</p>
          </Column>

          <Column>
            <button> Remove Task </button>
          </Column>
        </FlexContainer>
      </ListItem>
    );
  }
}
export default Task;
