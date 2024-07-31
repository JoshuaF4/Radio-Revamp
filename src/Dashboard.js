import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = ({ selectedTest }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Scores',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Dashboard for {selectedTest}</h2>
      <div className="chart-container">
        <div className="chart">
          <Bar data={data} options={options} />
        </div>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
        <div className="chart">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
