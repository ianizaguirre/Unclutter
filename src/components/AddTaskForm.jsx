import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  border-color: #e1e1e1;
  border-top-style: solid;
  border-width: 1px;

  padding-bottom: 11px;
`;

const Input = styled.input`
  color: #4c4c4c;
  width: 100%;
  background-color: #ffffff;
  font-size: 14px;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 4px 16px;
  transition: background-color linear 0.2s, border-color linear 0.2s, box-shadow linear 0.2s,
    -webkit-box-shadow linear 0.2s;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  margin-top: 1rem;

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #359010;
  font-size: 14px;
  line-height: 20px;
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.8;
  }
`;
// getDate = () => {
//   let today = new Date();
//   today.setHours(0, 0, 0, 0);
//   return today;
// };
// "created" is set here BUT Lives in EditTaskForm.jsx
class AddTaskForm extends Component {
  contentRef = React.createRef();

  addToDoEntry = event => {
    event.preventDefault();
    const today = new Date()
      .toString()
      .split(' ')
      .splice(1, 2) // .splice(1, 3) for Year
      .join(' ');

    const userTaskEntry = {
      content: this.contentRef.value.value,
      created: today,
      id: `${Date.now()}`
    };

    this.props.addTask(userTaskEntry);
    this.props.holdTasks(userTaskEntry);
    event.currentTarget.reset();
  };

  render() {
    return (
      <FormWrapper>
        <form autoComplete="off" onSubmit={this.addToDoEntry}>
          <Input name="content" type="text" innerRef={this.contentRef} placeholder="Enter a Task" required />

          <Button type="submit"> Add Task → </Button>
        </form>
      </FormWrapper>
    );
  }
}

export default AddTaskForm;
