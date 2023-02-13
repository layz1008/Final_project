import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
import SignInModal from "./SignIn.jsx";


// We will eventually need some functions up here for authentication

// export default function Nav() {
  // class Navbar({search, handleSearch}) extends React.Component {
export default function Nav({search, handleSearch}) {
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



