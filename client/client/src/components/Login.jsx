import React, { useState } from 'react';

function Login({ setUsername, setIsLoggedIn }) {
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      setUsername(input);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter username..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Enter Chat</button>
    </div>
  );
}

export default Login;
