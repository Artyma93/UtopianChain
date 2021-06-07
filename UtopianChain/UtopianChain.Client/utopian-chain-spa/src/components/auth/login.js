import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

export const Login = () => (
  <AuthConsumer>
    {({ signinRedirect }) => {
      signinRedirect();
    }}
  </AuthConsumer>
);
