import React from "react";
import "../styles/logout.css";
const Logout = ({ onLogout }) => {
  return (
    <div className="form-container">
      <h2>Logout</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
