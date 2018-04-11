import React from 'react';
import logo from '../logo.svg';
import '../css/Header.css';

const Header = () => (
  <div className="Header-center-this">
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <h1 className="Header-title">Welcome to React</h1>
    </header>
  </div>
);

export default Header;
