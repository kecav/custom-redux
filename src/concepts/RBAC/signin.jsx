import React from "react";

const SignIn = ({ signIn, setSignIn }) => {
  return <button onClick={() => setSignIn(!signIn)}>CLICK</button>;
};

export default SignIn;
