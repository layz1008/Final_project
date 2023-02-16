import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import SignInModal from "./SignIn.jsx";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";

// export default function Nav({ search, handleSearch }) {
export default function Nav() {
  return (
    <div>
      <nav className="navBar">
        <HamburgerMenu />
        <NavLink className={"navBarInfo Link"} to="/">
          Home
        </NavLink>
        <NavLink className={"navBarInfo Link"} to="/create">
          Create Post
        </NavLink>
        <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signup">
          Sign-Up
        </NavLink>
      </nav>
    </div>
  );
}
