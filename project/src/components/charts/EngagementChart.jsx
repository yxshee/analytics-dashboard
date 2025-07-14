import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../ChartConfig';

export default function EngagementChart() {
  const [chartData, setChartData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'User Engagement (%)',
        data: [65, 59, 80, 81, 56, 55, 70],
        borderColor: 'var(--color-accent)',
        backgroundColor: 'rgba(255, 91, 91, 0.2)',
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const nextValue = Math.floor(50 + Math.random() * 50);
        const nextLabels = prev.labels.map((lbl, i) => lbl);
        const nextData = [...prev.datasets[0].data.slice(1), nextValue];
        return {
          labels: nextLabels,
          datasets: [{ ...prev.datasets[0], data: nextData }],
        };
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}
