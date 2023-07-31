import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import AuthDetails from "../AuthDetails";

const Signup = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signUp = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log(userCredential);
          }).catch((error) => {
              console.log(error);
          })
  
    }
  
    return (
      <center>
      <div className="sign-in-container">
        <form onSubmit={signUp}>
          <h1>Create Account</h1>
          <input type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
          <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <AuthDetails/>
      </div>
      </center>
    );
}

export default Signup