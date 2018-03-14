import React, { Component } from 'react';

class ToDoItem extends Component {
  state = {
      userTask: ''
    };

  handleUserTaskInput = event => {
  	this.setState({ userTask: event.target.value });
  }

  render() {
    return (
      <div className="wrapper">


        <h1> TO DO ITEM EXAMPLE </h1>

        <input
         onChange={this.handleUserTaskInput}
     	   value={this.state.userTask} 
       	 type="text"
       	 placeholder="Enter a Task"
        />


      </div>
    );
  }
}

export default ToDoItem;
