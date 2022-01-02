import React from "react";
import classes from "./Login.module.css";
import { auth, provider } from "../../firebase";

function Login() {
  const onSignIn = () => {
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.login}>
      <img
        src="https://worldsummit.ai/wp-content/uploads/sites/4/2021/07/Facebook-logo.png"
        alt=""
      />
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
        alt=""
      />
      <button onClick={onSignIn}>Sign in</button>
    </div>
  );
}

export default Login;
