import React from 'react';
import Graph from './Graph';
import Statistics from './Statistics';
import './Content.css';

const Content = () => {
  return (
    <div className="content">
      <Graph />
      <Statistics />
    </div>
  );
};

export default Content;
