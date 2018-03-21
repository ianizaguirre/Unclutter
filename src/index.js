import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
	render(<Router />, document.getElementById('root'));
};

renderApp();
registerServiceWorker();
