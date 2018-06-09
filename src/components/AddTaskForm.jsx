import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-color: #e1e1e1;
  border-top-style: solid;
  border-width: 1px;

  padding-bottom: 11px;
`;

const Input = styled.input`
  color: #4c4c4c;
  min-width: 100%;
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

  &:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 4px;
`;

const Button = styled.button`
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 12px;
  line-height: 20px;
  border: ${props => (props.cancel ? '1px solid transparent' : '1px solid')};
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.25s ease;
  letter-spacing: 1px;

  margin-right: 0.5em;
  padding: 0.375rem 0.75rem;

  &:hover {
    opacity: ${props => (props.cancel ? '1' : '0.8')};
    text-decoration: ${props => (props.cancel ? 'underline' : 'none')};
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
// getDate = () => {
//   let today = new Date();
//   today.setHours(0, 0, 0, 0);
//   return today;
// };
// "created" is set here BUT Lives in EditTaskForm.jsx

// >>>>>>>>>>>>>>>>>>>>>>
const MenuIconWrap = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  display: ${props => (props.isOpen ? 'none' : 'inline-block')};
`;
const ToggleWrap = styled.div`
  position: relative;

  width: 100%;
  cursor: pointer;
  color: #6b9945;
  opacity: 0.6;
  transition: opacity.2s ease-in;

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};

  &:hover {
    color: #6b9945;
    opacity: 1;
  }
`;

const ToggleText = styled.span`
  &:hover {
    color: #6b9945;
    opacity: 1;
    text-decoration: underline;
  }
`;

const ToggleIcon = styled.span`
  font-size: 23px;
  font-weight: 500;
  padding-right: 5px;
  text-decoration: none;
`;

const MenuContents = styled.div`
  width: 100%;
  color: #7d8485;
  background-color: #ffffff;

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};
`;
// >>>>>>>>>>>>>>>>>>>>>

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
      <Wrapper>
        <MenuIconWrap isOpen={this.props.isAvailable} onClick={this.props.addTaskToggle}>
          <ToggleWrap>
            <ToggleIcon>+</ToggleIcon>
            <ToggleText> Add Task</ToggleText>
          </ToggleWrap>
        </MenuIconWrap>

        <MenuContents isOpen={!this.props.isAvailable}>
          <form autoComplete="off" onSubmit={this.addToDoEntry}>
            <Input name="content" type="text" innerRef={this.contentRef} placeholder="Enter a Task" required />
            <ButtonWrap>
              <Button type="submit"> Add Task → </Button>
              <Button cancel onClick={this.props.addTaskToggle}>
                Cancel
              </Button>
            </ButtonWrap>
          </form>
        </MenuContents>
      </Wrapper>
    );
  }
}

export default AddTaskForm;
