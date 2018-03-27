import React, { Component } from 'react';

import Task from './Task';

class ToDoList extends Component {
	render() {
		return (
			<div className="wrapper">
				<ul>
					{Object.keys(this.props.tasks).map(key => (
						<Task key={key} dummyDetails={this.props.tasks[key]} />
					))}
				</ul>
			</div>
		);
	}
}

export default ToDoList;
