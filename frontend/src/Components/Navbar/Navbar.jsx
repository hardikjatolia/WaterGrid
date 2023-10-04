import React from 'react';
import './navbar.scss'; // Import your CSS file for styling if needed

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Water Grid Management</h1>
      <div className="nav-options">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/agents">Agents</a>
      </div>
    </div>
  );
}

export default Navbar;
