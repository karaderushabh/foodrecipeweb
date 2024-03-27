// Header.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-content">
        <h1>My React App</h1>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="button-link">
            Logout
          </button>
        ) : (
          <div>
            <Link to="/login" className="button-link">
              Login
            </Link>
            <Link to="/register" className="button-link">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
