import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          exact="true"
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "active" : "")}
          exact="true"
        >
          TODO
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          exact="true"
        >
          About
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active" : "")}
          exact="true"
        >
          Users
        </NavLink>
      </div>
    );
  }
}

export default Nav;
