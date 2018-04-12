import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: #4c4c4c;
`;
const Input = styled.input`
  color: #4c4c4c;
  background-color: #ffffff;
  font-size: 14px;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 4px 16px;
  transition: background-color linear 0.2s, border-color linear 0.2s, box-shadow linear 0.2s,
    -webkit-box-shadow linear 0.2s;
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #359010;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

class AddTaskForm extends Component {
  nameRef = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();

    const userTaskEntry = {
      name: this.nameRef.value.value
    };

    this.props.addTask(userTaskEntry);
    event.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <Title>Add Task Form:</Title>

        <form onSubmit={this.addToDoEntry}>
          <Input name="name" type="text" innerRef={this.nameRef} placeholder="Enter a Task" required />

          <Button type="submit"> Add Task → </Button>
        </form>
      </Fragment>
    );
  }
}

export default AddTaskForm;
