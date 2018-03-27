import React, { Component } from 'react';

class TaskModel extends Component {
	render() {
		const { name } = this.props.dummyDetails;

		return (
			<li>
				<p>{name}</p>

				<button> Remove Task </button>
			</li>
		);
	}
}
export default TaskModel;
