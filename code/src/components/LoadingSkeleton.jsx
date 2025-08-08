import React from 'react';
import './LoadingSkeleton.css';

export const ChartSkeleton = () => (
  <div className="chart-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-line skeleton-subtitle"></div>
    </div>
    <div className="skeleton-chart-area">
      <div className="skeleton-chart-bars">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="skeleton-bar" 
            style={{ height: `${Math.random() * 60 + 40}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export const KPISkeleton = () => (
  <div className="kpi-skeleton">
    <div className="skeleton-line skeleton-kpi-title"></div>
    <div className="skeleton-line skeleton-kpi-value"></div>
    <div className="skeleton-line skeleton-kpi-change"></div>
  </div>
);

export const TableSkeleton = () => (
  <div className="table-skeleton">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="skeleton-table-row">
        {[...Array(6)].map((_, j) => (
          <div key={j} className="skeleton-line skeleton-table-cell"></div>
        ))}
      </div>
    ))}
  </div>
);
