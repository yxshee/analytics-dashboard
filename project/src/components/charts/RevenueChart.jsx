import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../ChartConfig';

export default function RevenueChart() {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (USD)',
        data: [1200, 1900, 1700, 2200, 2400, 2600],
        borderColor: 'var(--color-primary)',
        backgroundColor: 'rgba(100, 108, 255, 0.2)',
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const nextValue = Math.floor(1000 + Math.random() * 2000);
        const nextLabels = [...prev.labels.slice(1), `M${prev.labels.length + 1}`];
        const nextData = [...prev.datasets[0].data.slice(1), nextValue];
        return {
          labels: nextLabels,
          datasets: [
            { ...prev.datasets[0], data: nextData },
          ],
        };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}
