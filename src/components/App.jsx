import React, { Component, Fragment } from 'react';

import '../css/App.css';

import Header from './Header';
import TodayView from './TodayView';
import ToDoList from './ToDoList';

class App extends Component {
	state = {
		tasks: {}
	};

	handleAddTask = someTask => {
		const tasks = { ...this.state.tasks };

		tasks[`task${Date.now()}`] = someTask;

		this.setState({
			tasks: tasks
		});
	};

	render() {
		return (
			<Fragment>
				<Header />

				<div className="Center-this">
					<h1>This is the Start of the App Component</h1>
					<ToDoList />
					<TodayView addTask={this.handleAddTask} />
				</div>
			</Fragment>
		);
	}
}

export default App;
