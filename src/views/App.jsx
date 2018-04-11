import React, { Component, Fragment } from 'react';

//import '../css/App.css';

import Header from '../components/Header';
import TodayView from '../components/TodayView';
import ToDoList from '../components/ToDoList';

class App extends Component {
  state = {
    tasks: {},
    quota: {}
  };

  handleAddTask = someTask => {
    const tasks = { ...this.state.tasks };

    tasks[`task${Date.now()}`] = someTask;

    this.setState({
      tasks: tasks
    });
  };

  addToQuota = key => {
    const quota = { ...this.state.quota };

    quota[key] = quota[key] + 1 || 1;

    this.setState({
      quota: quota
    });
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="Wrap-this">Add Task Form:</div>

        <ToDoList tasks={this.state.tasks} />

        <TodayView addTask={this.handleAddTask} />
      </Fragment>
    );
  }
}

export default App;
