import React from 'react';
import logo from '../logo.svg';
import '../css/Header.css';

const Header = () => (
	<div className="Center-this">
		<header className="Header">
			<img src={logo} className="Header-logo" alt="logo" />
			<h1 className="Header-title">Welcome to React</h1>
		</header>

		<p className="Header-intro">
			To get started, edit <code>src/Header.js</code> and save to reload.
		</p>
	</div>
);

export default Header;
