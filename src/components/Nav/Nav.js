import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="Nav">
      <div className="NavItem left">BestRunner</div>
      <div className="NavItem center">
        <NavLink to={"/"} className="NavLink">
          Workouts
        </NavLink>
      </div>
      <div className="NavItem right">
        <NavLink to={"/info"} className="NavLink">
          Info
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
