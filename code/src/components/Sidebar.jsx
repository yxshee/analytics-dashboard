import React from 'react';
import './Sidebar.css';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' }
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
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
