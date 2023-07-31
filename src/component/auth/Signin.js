import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import AuthDetails from "../AuthDetails";


const Signin = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })

  }

  return (
    <div className="sign-in-container">
      <div className="container">
      <form onSubmit={signIn}>
        <h1 align="center">Log In</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      {/* <form onSubmit={signIn}>
        <h1>Log In</h1>
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
        <button type="submit">Log in</button>
      </form> */}
      <center>
        <AuthDetails/>
      </center>
    </div>
  );
};

export default Signin;
