import React from "react";
import { LoginButton } from "./LoginButton";
import { signinRedirect } from "./services/userService";

function login() {
  signinRedirect();
}
export const LoginButtonContainer = () => {
  return (
    <>
      <LoginButton login={login} />
    </>
  );
};
