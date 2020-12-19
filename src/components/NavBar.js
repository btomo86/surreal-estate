import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FaFortAwesome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <FaFortAwesome size="2rem" />
        <span className="header">Surreal Estate</span>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
