import React, { Component, Fragment } from 'react';

import AddTaskForm from './AddTaskForm';

class TodayView extends Component {
	render() {
		return (
			<Fragment>
				<h2>Todays View </h2>
				<AddTaskForm />
			</Fragment>
		);
	}
}

export default TodayView;
