import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <ul>
        <li>Total Tests: 4</li>
        <li>Average Score: 75%</li>
        <li>Highest Score: 95%</li>
        <li>Lowest Score: 50%</li>
      </ul>
    </div>
  );
};

export default Statistics;
