import React, { Component, Fragment } from 'react';

import '../css/App.css';

import Header from './Header';
import TodayView from './TodayView';
import ToDoList from './ToDoList';

import TaskModel from './TaskModel';

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
					<h2> ==== TEST AREA ==== </h2>
					<ul>
						{Object.keys(this.state.tasks).map(key => (
							<TaskModel key={key} dummyDetails={this.state.tasks[key]} />
						))}
					</ul>
					<h2> ==== END TEST AREA ==== </h2>
					<h1>This is the Start of the App Component</h1>
					<ToDoList />
					<TodayView addTask={this.handleAddTask} />
				</div>
			</Fragment>
		);
	}
}

export default App;
