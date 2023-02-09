import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import user authentication 
import "./signup.css";

export default function SignUp() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    valid: ""
  });

  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [valid, setValid] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({
      username,
      email,
      password,
      passwordConfirm,
      valid: password === passwordConfirm ? (password !== "" ? true : "") : false
    })

    setEmail('')
    setPassword('')
    setPasswordConfirm('')
    setValid(null)
  }

  const passwordValidation = (password) => {
    const specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g
    const numChar = /\d/
    if (password.length >= 6 && specialChar.test(password) && numChar.test(password))
      return true
    else
      return false
  }

  const result = (validation) => {
    if (validation === "") {
      return <p></p>
    } else if (validation === true) {
      if (passwordValidation(user.password) === false) {  
        return (
          <>
            <p>"Password Must Contain at least 6 letters"</p>
            <p>"Password Must Include a Number and Special Character"</p>
          </>   
          )
      } else {
        return <Navigate to="/" replace={true} />
      }
    } else {
      return "Password incorrect. Please try again."
    }
  }

  return (
    <div className="sign-up-main-container">
      <h1> Sign up page</h1>
    </div>
  )
} 


