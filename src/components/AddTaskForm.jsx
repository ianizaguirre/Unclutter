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
// getDate = () => {
//   let today = new Date();
//   today.setHours(0, 0, 0, 0);
//   return today;
// };
// "created" is set here BUT Lives in EditTaskForm.jsx
class AddTaskForm extends Component {
  nameRef = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();
    const today = new Date()
      .toString()
      .split(' ')
      .splice(1, 2) // .splice(1, 3) for Year
      .join(' ');

    const userTaskEntry = {
      name: this.nameRef.value.value,
      created: today,
      id: `${Date.now()}`
    };

    this.props.addTask(userTaskEntry);
    this.props.holdTasks(userTaskEntry);
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
