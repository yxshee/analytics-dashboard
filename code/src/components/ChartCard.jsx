import React, { useId } from 'react';
import { exportElementAsPNG } from '../utils/exportUtils';
import './ChartCard.css';

export default function ChartCard({ title, subtitle, insight, children }) {
  const cardId = useId();
  const elementId = `chart-card-${cardId}`;
  return (
    <div className="card chart-card" id={elementId}>
      <div className="chart-header">
        <div className="chart-title-section">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
        <div className="chart-actions">
          <button 
            className="chart-action-btn" 
            aria-label="Download chart as PNG"
            onClick={() => exportElementAsPNG(elementId, title?.toLowerCase().replace(/\s+/g,'-') || 'chart')}
          >
            <span>⬇</span>
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
