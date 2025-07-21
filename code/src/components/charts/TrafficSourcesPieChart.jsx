import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TrafficSourcesPieChart = () => {
  const data = {
    labels: ['Direct', 'Search', 'Social Media', 'Email'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [45, 35, 15, 5],
        backgroundColor: [
          '#3b82f6', // Blue
          '#10b981', // Green
          '#f59e0b', // Yellow
          '#ef4444', // Red
        ],
        borderColor: [
          '#2563eb',
          '#059669',
          '#d97706',
          '#dc2626',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          color: 'var(--color-text)',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TrafficSourcesPieChart;
