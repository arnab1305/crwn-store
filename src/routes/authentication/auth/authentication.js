import React from "react";
import SignUp from "../sign-up/SignUp.component";
import SignIn from "../sign-in/SignIn.component";
import './authentication.scss'

export default function Authentication() {
  
  return (
    <div className="authentication-container">
      <SignIn/>
      <SignUp />
    </div>
  );
}
