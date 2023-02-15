import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import "./nav.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";
import { logoutUser } from '../../services/auth.js';
import { UserContext } from '../../contexts/userContext.js';


export default function Nav({ search, handleSearch }) {

  const {user, setUser, isUserLoggedIn} = useContext(UserContext)
  const logout = (event) => {
    event.preventDefault();
    logoutUser();
    setUser(null);
  }
    return (
    <div>
      <nav className="navBar">
        <HamburgerMenu />
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
        <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signup">
          Sign-Up
        </NavLink>
        {isUserLoggedIn() ? 
          <NavLink onClick={logout} className={"navBarInfo"} id="navbar-buttons" to="/">Logout</NavLink>
          :
          <NavLink className={"navBarInfo"} id="navbar-buttons" to="/login">Login</NavLink>
        }
      </nav>
    </div>
  )
}



