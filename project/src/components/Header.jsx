import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import './Header.css'

const Header = () => {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Dashboard</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item current">Overview</span>
          </div>
          <h1>Welcome back, John!</h1>
          <p className="header-subtitle">
            Here's what's happening with your business today. You have 3 new notifications.
          </p>
        </div>
        <div className="header-right">
          <div className="header-actions">
            <button className="notification-btn" aria-label="Notifications">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
            
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
            >
              <span className="theme-icon">{dark ? '☀️' : '🌙'}</span>
              <span className="theme-label">{dark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
          
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">Product Manager</span>
            </div>
            <div className="user-avatar">
              <span>JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
