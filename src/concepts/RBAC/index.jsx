import React, { useState } from "react";
import Signin from "./signin";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./authRoute";
import NonAuthRoute from "./nonAuthRoute";
import AuthWrapper from "./AuthWrapper";

const RBAC = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <h2>{signIn ? "Authenticated" : "UnAuthenticated"}</h2>
      <Signin signIn={signIn} setSignIn={setSignIn} />
      <Routes>
          <Route path="/auth" element={<AuthWrapper>
            <AuthRoute />
          </AuthWrapper>} />
        <Route path="/nonauth" element={<NonAuthRoute />} />
      </Routes>
    </>
  );
};

export default RBAC;
