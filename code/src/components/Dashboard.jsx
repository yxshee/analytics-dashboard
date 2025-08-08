import React, { useState, useEffect } from 'react';
import ChartCard from './ChartCard';
import RevenueChart from './charts/RevenueChart';
import EngagementChart from './charts/EngagementChart';
import TrafficChart from './charts/TrafficChart';
import DataTable from './DataTable';
import { exportToPDF } from '../utils/exportUtils';
import './Dashboard.css';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    activeUsers: 0,
    conversionRate: 0,
    avgOrderValue: 0
  });

  // Simulate real-time data updates
  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        totalRevenue: 2847650 + Math.floor(Math.random() * 1000),
        activeUsers: 34567 + Math.floor(Math.random() * 100),
        conversionRate: 3.42 + (Math.random() * 0.1 - 0.05),
        avgOrderValue: 127.84 + (Math.random() * 5 - 2.5)
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(Math.floor(value));
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sampleData = [
    { id: '001', customer: 'Alice Johnson', amount: 1247.50, date: '2025-08-01', status: 'Completed', product: 'Enterprise Plan' },
    { id: '002', customer: 'Bob Chen', amount: 875.00, date: '2025-08-02', status: 'Pending', product: 'Professional Plan' },
    { id: '003', customer: 'Charlie Davis', amount: 2199.00, date: '2025-08-03', status: 'Completed', product: 'Custom Solution' },
    { id: '004', customer: 'Diana Rodriguez', amount: 450.00, date: '2025-08-04', status: 'Cancelled', product: 'Basic Plan' },
    { id: '005', customer: 'Evan Thompson', amount: 1680.75, date: '2025-08-05', status: 'Completed', product: 'Premium Plan' },
    { id: '006', customer: 'Fiona Walsh', amount: 920.00, date: '2025-08-06', status: 'Pending', product: 'Professional Plan' },
    { id: '007', customer: 'George Kumar', amount: 3240.00, date: '2025-08-07', status: 'Completed', product: 'Enterprise Plus' },
    { id: '008', customer: 'Hannah Lee', amount: 1130.50, date: '2025-08-08', status: 'Completed', product: 'Professional Plan' }
  ];

  return (
    <div className="dashboard" id="dashboard-content">
      <div className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Business Intelligence Dashboard</h1>
            <p className="dashboard-subtitle">
              Real-time insights for {currentDate} • Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>
          <div className="dashboard-actions">
            <button 
              className="action-btn primary"
              onClick={() => exportToPDF('dashboard-content', 'admybrand-dashboard')}
            >
              <span>📊</span> Export PDF
            </button>
            <button className="action-btn secondary">
              <span>📈</span> Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced KPI Cards */}
      <div className="kpi-grid">
        <div className="stat-card primary">
          <div className="stat-header">
            <h3>Total Revenue</h3>
            <span className="stat-icon">💰</span>
          </div>
          <div className="stat-value">{formatCurrency(metrics.totalRevenue)}</div>
          <div className="stat-change positive">
            <span className="trend-icon">↗</span>
            +12.5% vs last month
          </div>
          <div className="stat-insight">
            Best performing month in Q3
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-header">
            <h3>Active Users</h3>
            <span className="stat-icon">👥</span>
          </div>
          <div className="stat-value">{formatNumber(metrics.activeUsers)}</div>
          <div className="stat-change positive">
            <span className="trend-icon">↗</span>
            +8.2% vs last week
          </div>
          <div className="stat-insight">
            Peak usage during lunch hours
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-header">
            <h3>Conversion Rate</h3>
            <span className="stat-icon">🎯</span>
          </div>
          <div className="stat-value">{metrics.conversionRate.toFixed(2)}%</div>
          <div className="stat-change neutral">
            <span className="trend-icon">→</span>
            -0.1% vs last week
          </div>
          <div className="stat-insight">
            Mobile conversion needs improvement
          </div>
        </div>

        <div className="stat-card error">
          <div className="stat-header">
            <h3>Avg Order Value</h3>
            <span className="stat-icon">🛒</span>
          </div>
          <div className="stat-value">{formatCurrency(metrics.avgOrderValue)}</div>
          <div className="stat-change positive">
            <span className="trend-icon">↗</span>
            +5.7% vs last month
          </div>
          <div className="stat-insight">
            Premium products driving growth
          </div>
        </div>
      </div>

      {/* Enhanced Charts Section */}
      <div className="charts-section">
        <div className="section-header">
          <h2>Performance Analytics</h2>
          <p>Comprehensive view of your business metrics and trends</p>
        </div>
        
        <div className="charts-grid">
          <ChartCard 
            title="Revenue Trends" 
            subtitle="Monthly revenue performance with forecasting"
            insight="Revenue is trending upward with a 15% growth rate"
          >
            <RevenueChart />
          </ChartCard>
          
          <ChartCard 
            title="User Engagement" 
            subtitle="Daily active users and session duration"
            insight="Engagement peaks during weekdays, lowest on weekends"
          >
            <EngagementChart />
          </ChartCard>
          
          <ChartCard 
            title="Traffic Analytics" 
            subtitle="Website traffic sources and patterns"
            insight="Organic search traffic increased by 23% this month"
          >
            <TrafficChart />
          </ChartCard>
        </div>
      </div>

      {/* Enhanced Data Table */}
      <div className="data-section">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <p>Latest customer transactions and order details</p>
        </div>
        <div className="table-container">
          <DataTable data={sampleData} />
        </div>
      </div>
    </div>
  );
}
