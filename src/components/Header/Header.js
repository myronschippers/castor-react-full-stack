import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="appBar">
        <img className="logo" src={logo} alt="React Logo" />
        <h1>Git Branching</h1>
      </header>
    );
  }
}

export default Header;
