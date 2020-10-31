import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="appBar">
        <img className="logo" src={logo} alt="React Logo" />
        <h1>React Full Stack with Axios</h1>
      </header>
    );
  }
}

export default Header;
