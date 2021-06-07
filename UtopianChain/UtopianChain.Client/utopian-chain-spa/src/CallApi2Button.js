import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { callApi2 } from "./UserManager";
export const CallApi2Button = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ExitToAppIcon />}
        onClick={callApi2}
      >
        CallApi2Button
      </Button>
    </>
  );
};
