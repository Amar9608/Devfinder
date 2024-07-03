import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

function Header() {
  const { themeMode, toggleTheme } = useTheme();

  const handleToggle = (e) => {
    toggleTheme();
  };

  return (
    <header className="header">
      <h1>DevFinder</h1>
      <div className="theme-switcher">
        <span>{themeMode === 'dark' ? 'Light' : 'Dark'}</span>
        <input
          type="checkbox"
          checked={themeMode === 'dark'}
          onChange={handleToggle}
        />
        {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
    </header>
  );
}

export default Header;
