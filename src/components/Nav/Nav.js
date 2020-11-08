import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="Nav">
      <div
        className="Nav__NavItem Nav__NavItem_Left"
        onMouseDown={(event) => event.preventDefault()}
      >
        BestRunner
      </div>
      <div className="Nav__NavItem Nav__NavItem_Center">
        <NavLink to={"/workouts"} className="Nav__NavItem__NavLink">
          Workouts
        </NavLink>
      </div>
      <div className="Nav__NavItem Nav__NavItem_Right ">
        <NavLink to={"/"} className="Nav__NavItem__NavLink">
          Info
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
