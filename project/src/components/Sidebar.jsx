import React from 'react';
import './Sidebar.css';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'reports', label: 'Reports', icon: '📋' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>ADmyBRAND</h2>
      </div>
      <nav>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <a 
                href="#" 
                className={activeTab === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
              >
                <span className="icon">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
