import React, { useState } from 'react';
import Login from './Login';
import SignupForm from './SignupForm';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Importing necessary icons
import logo from './images/gael.png';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for managing login form visibility
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State for managing signup form visibility

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true); // Show login form
    setIsSignupOpen(false); // Hide signup form
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true); // Show signup form
    setIsLoginOpen(false); // Hide login form
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='menu'>
        <button className='theme-toggle' onClick={toggleTheme}>
          {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <div className='menu-buttons'>
          <button className='btn login-btn' onClick={handleLoginClick}>
            Login
          </button>
          <button className='btn signup-btn' onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>

        <button className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`dropdown-menu ${isDarkMode ? 'dark' : ''}`}>
          <button className='btn login-btn' onClick={handleLoginClick}>
            Login
          </button>
          <button className='btn signup-btn' onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      )}

      {/* Conditionally render Login or Signup Form */}
      {isLoginOpen && <Login />}
      {isSignupOpen && <SignupForm />}
    </nav>
  );
};

export default Navbar;
