import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Sidebar from './components/Sidebar';
import data from './storage/data.json'; // Import the data from the JSON file

const tests = Object.keys(data);

const App = () => {
  const [selectedTest, setSelectedTest] = useState(tests[0]);
  const [chartData, setChartData] = useState(data[selectedTest]);

  useEffect(() => {
    setChartData(data[selectedTest]);
  }, [selectedTest]);

  return (
    <div className="App">
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
  );
};

export default App;
