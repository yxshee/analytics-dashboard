import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../ChartConfig';

export default function TrafficChart() {
  const [chartData, setChartData] = useState({
    labels: ['Home', 'Products', 'Pricing', 'About', 'Contact'],
    datasets: [
      {
        label: 'Page Views',
        data: [300, 500, 400, 200, 350],
        backgroundColor: [
          'var(--color-primary)',
          'var(--color-accent)',
          'var(--color-primary-hover)',
          'var(--color-muted)',
          'var(--color-primary)'
        ],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const nextData = prev.datasets[0].data.map(
          () => Math.floor(200 + Math.random() * 400)
        );
        return { ...prev, datasets: [{ ...prev.datasets[0], data: nextData }] };
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <Bar 
        data={chartData} 
        options={{ 
          responsive: true, 
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: 'var(--color-text)'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'var(--color-text-secondary)'
              },
              grid: {
                color: 'var(--color-border)'
              }
            },
            y: {
              ticks: {
                color: 'var(--color-text-secondary)'
              },
              grid: {
                color: 'var(--color-border)'
              }
            }
          }
        }} 
      />
    </div>
  );
}
