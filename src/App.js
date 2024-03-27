import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (username, password) => {
    alert(`Registering user: ${username}`);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="/" element={<h2>Welcome to My React App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
