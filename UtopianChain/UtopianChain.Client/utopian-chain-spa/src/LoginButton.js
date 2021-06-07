import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AuthService, { loginAuthService } from "./services/AuthService";
import { authConfig } from "./utils/auth/authConfig";
import { AuthConsumer } from "./providers/authProvider";
import { Login } from "./components/auth/login";
// import { callApi, login, logout } from "./UserManager";

// const authService = new AuthService();

export const LoginButton = (props) => {
  const { login } = props;

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ExitToAppIcon />}
        onClick={login}
      >
        Вход
      </Button>
    </>
  );
};
