import React from 'react';
import './ChartCard.css';

export default function ChartCard({ title, subtitle, insight, children }) {
  return (
    <div className="card chart-card">
      <div className="chart-header">
        <div className="chart-title-section">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
        <div className="chart-actions">
          <button className="chart-action-btn" aria-label="More options">
            <span>⋯</span>
          </button>
        </div>
      </div>
      
      <div className="chart-content">
        {children}
      </div>
      
      {insight && (
        <div className="chart-insight">
          <div className="insight-icon">💡</div>
          <span className="insight-text">{insight}</span>
        </div>
      )}
    </div>
  );
}
