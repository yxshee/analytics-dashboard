import React from 'react';
import './Sidebar.css';

const items = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {items.map(item => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
