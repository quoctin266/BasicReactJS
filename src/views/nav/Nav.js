import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" activeClassName="selected" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="selected" exact={true}>
          TODO
        </NavLink>
        <NavLink to="/about" activeClassName="selected" exact={true}>
          About
        </NavLink>
      </div>
    );
  }
}

export default Nav;
