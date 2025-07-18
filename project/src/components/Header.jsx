import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import './Header.css'

const Header = () => {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="header-right">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <div className="user-profile">
            <div className="user-avatar">
              <span>JD</span>
            </div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
