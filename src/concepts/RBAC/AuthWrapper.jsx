import React from "react";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children, isAuth }) => {
  const navigate = useNavigate();

  if (!isAuth) {
    return navigate("/nonauth");
  }
  return (
    <>
      {children}
    </>
  );
};

export default AuthWrapper;
