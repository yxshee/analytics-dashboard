import React, { useMemo, useState } from 'react';
import { exportToPDF, exportJSONToCSV } from '../utils/exportUtils';
import './Reports.css';

export default function Reports() {
  const initialReports = [
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

  const [reports, setReports] = useState(initialReports);
  const [toast, setToast] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready': return 'var(--color-success)';
      case 'Processing': return 'var(--color-warning)';
      case 'Scheduled': return 'var(--color-primary)';
      default: return 'var(--color-muted)';
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  const generateReport = () => {
    const id = Math.max(0, ...reports.map(r => r.id)) + 1;
    const newReport = {
      id,
      title: 'Generated Report',
      description: 'Auto-generated summary based on current filters',
      date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
      status: 'Processing',
      format: Math.random() > 0.5 ? 'PDF' : 'Excel'
    };
    setReports([newReport, ...reports]);
    showToast('Report generation started');
    // Simulate processing
    setTimeout(() => {
      setReports(prev => prev.map(r => r.id === id ? { ...r, status: 'Ready' } : r));
      showToast('Report is ready');
    }, 1500);
  };

  const sampleRows = useMemo(() => (
    [
      { metric: 'Revenue', value: 2847650, change: '+12.5%' },
      { metric: 'Active Users', value: 34567, change: '+8.2%' },
      { metric: 'Conversion Rate', value: '3.42%', change: '-0.1%' },
    ]
  ), []);

  const handleDownload = async (reportId) => {
    const report = reports.find(r => r.id === reportId);
    if (!report || report.status !== 'Ready') return;
    if (report.format === 'PDF') {
      // export a specific card area: create a temp container
      const tempId = `report-${reportId}-export`;
      const temp = document.createElement('div');
      temp.id = tempId;
      temp.style.padding = '16px';
      temp.style.background = '#fff';
      temp.innerHTML = `<h1 style="margin:0 0 8px 0;">${report.title}</h1><p style="margin:0 0 12px 0;">${report.description}</p>` +
        `<table style="width:100%; border-collapse:collapse;">` +
        sampleRows.map(r => `<tr><td style="border:1px solid #ccc; padding:6px;">${r.metric}</td><td style="border:1px solid #ccc; padding:6px;">${r.value}</td><td style="border:1px solid #ccc; padding:6px;">${r.change}</td></tr>`).join('') +
        `</table>`;
      document.body.appendChild(temp);
      await exportToPDF(tempId, report.title.replace(/\s+/g, '-').toLowerCase());
      document.body.removeChild(temp);
    } else {
      exportJSONToCSV(sampleRows, report.title.replace(/\s+/g, '-').toLowerCase() + '.csv');
    }
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1>Reports</h1>
        <p>Generate and download comprehensive reports</p>
        <button className="btn-primary" onClick={generateReport}>Generate New Report</button>
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
          <div key={report.id} className="card report-card" id={`report-card-${report.id}`}>
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
                <button className="btn-download" onClick={() => handleDownload(report.id)}>Download</button>
              )}
            </div>
          </div>
        ))}
      </div>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}
