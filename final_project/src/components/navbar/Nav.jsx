import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
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
        {/* <div className="search">
        <input
          type="text"
          className="nav-search-input"
          onChange={handleSearch}
        />
        </div> */}
        <NavLink className={"navBarInfo Link"} to="/create">
          Create Post 
        </NavLink>
        <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signup">
          Sign-Up
        </NavLink>

      {/* <p onClick={this.handleModalOpen} className={"navBarInfo"} id="navbar-buttons" >
            Sign-In
          </p> */}
        </nav>
        {/* <SignInModal
              modalOpen={state.modalOpen}
              handleModalOpen={handleModalOpen}
              handleSignIn={handleSignIn}
           /> */}
    </div>
  )
}



