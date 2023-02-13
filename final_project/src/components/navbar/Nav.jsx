import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

// We will eventually need some functions up here for authentication

export default function Nav({ search, handleSearch }) {
  return (
    <div>
      <nav className="navBar">
        <NavLink className={"navBarInfo Link"} to="/">
          Home
        </NavLink>
        <div className="search">
        <input
          type="text"
          className="nav-searchInput"
          onChange={handleSearch}
        />
        </div>
        <NavLink className={"navBarInfo Link"} to="/create">
          Create Post 
        </NavLink>
        <NavLink className={"navBarInfo Link"} to="/readmex2">
          ReadMe
        </NavLink>
        <div className="navBarInfo" id="barButton">
        <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signup">
          Sign-Up
        </NavLink>
        <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signin">
          Sign-In
        </NavLink>
        </div>
      </nav>
    </div>
  );
}
