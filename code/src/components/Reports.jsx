import React from 'react';
import './Reports.css';

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Performance Report',
      description: 'Comprehensive overview of monthly metrics and KPIs',
      date: 'August 2025',
      status: 'Ready',
      format: 'PDF'
    },
    {
      id: 2,
      title: 'Campaign Analysis Q3',
      description: 'Detailed analysis of Q3 marketing campaigns',
      date: 'July 2025',
      status: 'Ready',
      format: 'Excel'
    },
    {
      id: 3,
      title: 'User Engagement Insights',
      description: 'Deep dive into user behavior and engagement patterns',
      date: 'August 2025',
      status: 'Processing',
      format: 'PDF'
    },
    {
      id: 4,
      title: 'Revenue Breakdown',
      description: 'Financial performance across all product lines',
      date: 'August 2025',
      status: 'Scheduled',
      format: 'Excel'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready': return 'var(--color-success)';
      case 'Processing': return 'var(--color-warning)';
      case 'Scheduled': return 'var(--color-primary)';
      default: return 'var(--color-muted)';
    }
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1>Reports</h1>
        <p>Generate and download comprehensive reports</p>
        <button className="btn-primary">Generate New Report</button>
      </div>
      
      <div className="reports-filters">
        <div className="filter-group">
          <label>Date Range</label>
          <select>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Custom range</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Report Type</label>
          <select>
            <option>All Types</option>
            <option>Performance</option>
            <option>Financial</option>
            <option>User Analytics</option>
          </select>
        </div>
      </div>
      
      <div className="reports-list">
        {reports.map(report => (
          <div key={report.id} className="card report-card">
            <div className="report-info">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <div className="report-meta">
                <span className="report-date">{report.date}</span>
                <span className="report-format">{report.format}</span>
              </div>
            </div>
            <div className="report-status">
              <span 
                className="status-badge" 
                style={{ backgroundColor: getStatusColor(report.status) }}
              >
                {report.status}
              </span>
              {report.status === 'Ready' && (
                <button className="btn-download">Download</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
