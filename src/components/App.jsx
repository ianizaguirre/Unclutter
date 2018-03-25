import React, { Component, Fragment } from 'react';

import '../css/App.css';

import Header from './Header';
import TodayView from './TodayView';
import ToDoList from './ToDoList';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />

				<div className="Center-this">
					<h1>This is the Start of the App Component</h1>
					<ToDoList />
					<TodayView />
				</div>
			</Fragment>
		);
	}
}

export default App;
