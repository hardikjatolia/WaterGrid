import React from 'react';
import { Link } from 'react-router-dom';
import { FaTint } from 'react-icons/fa'; // Import FaTint icon from react-icons/fa
import './navbar.scss'; // Import your SCSS file for styling if needed

const Navbar = () => {
  return (
    <div className="navbar">
      
      <h1>Water Grid Management</h1>
      <div className="nav-options">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/forms">Form</Link>
      </div>
    </div>
  );
}

export default Navbar;
