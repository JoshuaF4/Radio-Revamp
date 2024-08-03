import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import BarChart from './BarChart.js';
import LineChart from './LineChart.js';
import PieChart from './PieChart.js';
import Sidebar from './Sidebar.js';
import data from './storage/data.json'; // Import the data from the JSON file

const tests = Object.keys(data);

const Dashboard = () => {
  const [selectedTest, setSelectedTest] = useState(tests[0]);
  const [chartData, setChartData] = useState(data[selectedTest]);

  useEffect(() => {
    setChartData(data[selectedTest]);
  }, [selectedTest]);

 {
    return (
    <div className="dashboard-container">

      <div className="dashboard-content"></div>
    <div className="dashboard">
      <Sidebar tests={tests} setSelectedTest={setSelectedTest} />
      <main className="content">
        <h1>{selectedTest} Statistics</h1>
        <div className="charts">
          <div className="chart bar-chart">
            <h2>Bar Chart</h2>
            <BarChart data={chartData.barData} />
          </div>
          <div className="chart line-chart">
            <h2>Line Chart</h2>
            <LineChart data={chartData.lineData} />
          </div>
          <div className="chart pie-chart">
            <h2>Pie Chart</h2>
            <PieChart data={chartData.pieData} />
          </div>
        </div>
        <div className="boxes">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="box"></div>
          ))}
        </div>
      </main>
    </div>
    </div>

  );
};
}
export default Dashboard;
