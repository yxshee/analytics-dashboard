import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Dashboard</h1>
      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          <span>{dark ? '☀️' : '�'}</span>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="user-info">
          <div className="user-avatar">JD</div>
          <div className="user-details">
            <span className="user-name">John Doe</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
