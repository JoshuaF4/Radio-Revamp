import React, { useState } from 'react';
import './Login.css';
import users from './storage/users.json';

const Login = ({ setUser, showSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log("Submit called");
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Here</h2>
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
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <a href="#" onClick={(e) => { e.preventDefault(); showSignup(); }}>Sign Up</a>
      </div>
    </div>
  );
};

export default Login;