import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>ADmyBRAND Dashboard</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? '🌞 Light Mode' : '🌜 Dark Mode'}
      </button>
    </header>
  );
}
