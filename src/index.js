import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './css/index.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
	render(<Router />, document.getElementById('root'));
};

renderApp();
registerServiceWorker();
