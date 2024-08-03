import React, { useState } from 'react';
import './Login.css';
import usersData from './storage/users.json';

const Signup = ({ setUser, showLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(usersData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
  };


  // handleSubmit needs to use <input type=submit, we using button for css
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
        <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>Back to Login</a>
      </div>
    </div>
  );
};

export default Signup;