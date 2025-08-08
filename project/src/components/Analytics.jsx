import React from 'react';
import TrafficSourcesPieChart from './charts/TrafficSourcesPieChart';
import './Analytics.css';

export default function Analytics() {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Deep insights into your performance metrics</p>
      </div>
      
      <div className="analytics-grid">
        <div className="card metric-card">
          <h3>Total Users</h3>
          <div className="metric-value">24,567</div>
          <div className="metric-change positive">+12.5% from last month</div>
        </div>
        
        <div className="card metric-card">
          <h3>Page Views</h3>
          <div className="metric-value">127,890</div>
          <div className="metric-change positive">+8.2% from last month</div>
        </div>
        
        <div className="card metric-card">
          <h3>Bounce Rate</h3>
          <div className="metric-value">34.2%</div>
          <div className="metric-change negative">-2.1% from last month</div>
        </div>
        
        <div className="card metric-card">
          <h3>Conversion Rate</h3>
          <div className="metric-value">3.4%</div>
          <div className="metric-change positive">+0.8% from last month</div>
        </div>
        
        <div className="card analytics-chart">
          <h3>User Growth Trend</h3>
          <div className="chart-placeholder">
            <p>📊 Advanced analytics chart would go here</p>
            <p>Shows user growth over the past 6 months</p>
          </div>
        </div>
        
        <div className="card analytics-chart">
          <h3>Traffic Sources</h3>
          <TrafficSourcesPieChart />
        </div>
      </div>
    </div>
  );
}
