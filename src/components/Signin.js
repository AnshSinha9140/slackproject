import React, { Component } from "react";
import { signInWithGoogle, signOut } from "../firebase";

class Signin extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In/Sign Up</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="http://pngimg.com/uploads/google/google_PNG19635.png"
            alt="pic"
          />
          Signin with Google
        </button>
        <div style={{ textAlign: "center", fontSize: 13 }}>OR</div>

        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="http://pngimg.com/uploads/google/google_PNG19635.png"
            alt="pic"
          />
          Sign up with Google
        </button>

        <br></br>
        <button onClick={signOut}>Logout</button>
      </div>
    );
  }
}
export default Signin;
