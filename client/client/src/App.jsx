import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

export default App;
