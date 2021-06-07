import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { callApi, login, logout } from "./UserManager";

export const Votes = () => {
  return (
    <>
      {/* <p>Votes</p> */}
      <Button
        variant="contained"
        color="primary"
        endIcon={<ExitToAppIcon />}
        onClick={login}
      >
        Votes
      </Button>
    </>
  );
};
