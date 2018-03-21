import React, { Component, Fragment } from 'react';

import './App.css';

import Header from './Header';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />

				<div className="Center-this">
					<h1>This is the Start of the App Component</h1>
					<ToDoList />
					<ToDoItem />
				</div>
			</Fragment>
		);
	}
}

export default App;
