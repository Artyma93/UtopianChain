import React from "react";
import { signinRedirect } from "../services/userService";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function LoginPageBebop() {
  const user = useSelector((state) => state.auth.user);

  function login() {
    signinRedirect();
  }

  return user ? (
    <Redirect to={"/"} />
  ) : (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}
