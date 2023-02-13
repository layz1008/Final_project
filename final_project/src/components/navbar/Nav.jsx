import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
import SignInModal from "./SignIn.jsx";


// We will eventually need some functions up here for authentication

class Navbar extends React.Component{
  state = {modalOpen:false}

  handleModalOpen = () => {
    this.setState((prevState) => {
       return{
          modalOpen: !prevState.modalOpen
       }})
    }

  handleSignIn= (username, password) => {}
 

  render() {
    return (
      <div>
        <nav className="navBar">
          <NavLink className={"navBarInfo Link"} to="/">
            Home
          </NavLink>
          <NavLink className={"navBarInfo Link"} to="/create">
            Create Post 
          </NavLink>
          <NavLink className={"navBarInfo Link"} to="/readmex2">
            ReadMe
          </NavLink>
          <NavLink className={"navBarInfo"} id="navbar-buttons" to="/signup">
            Sign-Up
          </NavLink>
          <p onClick={this.handleModalOpen} className={"navBarInfo"} id="navbar-buttons" >
            Sign-In
          </p>
        </nav>
        <SignInModal
              modalOpen={this.state.modalOpen}
              handleModalOpen={this.handleModalOpen}
              handleSignIn={this.handleSignIn}
           />
      </div>
    )
  }
}

export default Navbar;
