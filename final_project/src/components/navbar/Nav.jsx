import React, { useState } from "react";
import { NavLink, Route, useLocation } from "react-router-dom";
import "./nav.css"
import SignInModal from "./SignIn.jsx";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";



// We will eventually need some functions up here for authentication

// export default function Nav() {
  // class Navbar({search, handleSearch}) extends React.Component {
export default function Nav({ search, handleSearch }) {
  const location = useLocation().pathname
  console.log(location)
  // class Navbar extends React.Component{

  // const [state, setState] = useState(false)
  // const state = {modalOpen:false}

  // const handleModalOpen = () => {
  //   setState((prevState) => {
  //      return{
  //         modalOpen: !prevState.modalOpen
  //      }})
  //   }

  // const handleSignIn = (username, password) => {}
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
        {location == "/subs/1" ?
        <NavLink className={"navBarInfo Link"} to="/create">
          Create Post 
        </NavLink>
        : null}
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



