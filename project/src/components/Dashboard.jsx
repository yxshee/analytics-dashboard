import React from 'react';
import ChartCard from './ChartCard';
import RevenueChart from './charts/RevenueChart';
import EngagementChart from './charts/EngagementChart';
import TrafficChart from './charts/TrafficChart';
import DataTable from './DataTable';
import './Dashboard.css';

export default function Dashboard() {
  const sampleData = [
    { id: '001', customer: 'Alice', amount: 120.0, date: '2025-08-01', status: 'Completed' },
    { id: '002', customer: 'Bob', amount: 75.5, date: '2025-08-02', status: 'Pending' },
    { id: '003', customer: 'Charlie', amount: 200.0, date: '2025-08-03', status: 'Completed' },
    { id: '004', customer: 'Diana', amount: 50.0, date: '2025-08-04', status: 'Cancelled' },
    { id: '005', customer: 'Evan', amount: 180.75, date: '2025-08-05', status: 'Completed' },
    { id: '006', customer: 'Fiona', amount: 90.0, date: '2025-08-06', status: 'Pending' },
    { id: '007', customer: 'George', amount: 240.0, date: '2025-08-07', status: 'Completed' },
    { id: '008', customer: 'Hannah', amount: 130.5, date: '2025-08-08', status: 'Completed' },
    { id: '009', customer: 'Ian', amount: 60.0, date: '2025-08-09', status: 'Pending' },
    { id: '010', customer: 'Jane', amount: 300.0, date: '2025-08-10', status: 'Completed' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here's what's happening with your business today.</p>
      </div>

      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-value">$24,567</div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat-card accent">
          <div className="stat-value">1,234</div>
          <div className="stat-label">New Customers</div>
        </div>
        <div className="stat-card success">
          <div className="stat-value">98.5%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-card warning">
          <div className="stat-value">156</div>
          <div className="stat-label">Pending Orders</div>
        </div>
      </div>

      <div className="charts-grid">
        <ChartCard title="Revenue Overview">
          <RevenueChart />
        </ChartCard>
        <ChartCard title="User Engagement">
          <EngagementChart />
        </ChartCard>
        <ChartCard title="Traffic Sources">
          <TrafficChart />
        </ChartCard>
      </div>
      
      <div className="table-section">
        <h2>Recent Transactions</h2>
        <DataTable data={sampleData} />
      </div>
    </div>
  );
}
