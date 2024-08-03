import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard.js';
import './App.css';

const App = () => {
  let [user, setUser] = useState(null);
  let [showSignup, setShowSignup] = useState(false);

  let handleShowLogin = () => setShowSignup(false);
  let handleShowSignup = () => setShowSignup(true);
 
   return (
    <div className="app">
      {user ? (
        <div className='header'>
          <h2>Welcome {user.email}</h2>
        <Dashboard  />
        </div>
      ) : (
        showSignup ? (
          <Signup setUser={setUser} showLogin={handleShowLogin} />
        ) : (
          <Login setUser={setUser} showSignup={handleShowSignup} />
        )
      )}
    </div>
  );

  //to test Dashboard callinng only
/*return (
    <div className="app">

        <Dashboard user={user} /> - calling the user isnt working on Dashboard.js side,  look into that
      </div>
  );
*/ 

}


export default App;
