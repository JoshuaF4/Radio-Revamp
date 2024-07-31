import React from 'react';
import './Sidebar.css';

const Sidebar = ({ tests, setSelectedTest }) => {
  return (
    <div className="sidebar">
      <h2>Tests</h2>
      <ul>
        {tests.map((test, index) => (
          <li key={index} onClick={() => setSelectedTest(test)}>
            {test}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
