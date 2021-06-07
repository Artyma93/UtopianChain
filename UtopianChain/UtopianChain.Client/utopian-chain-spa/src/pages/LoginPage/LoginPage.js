import React, { Component } from "react";

// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

// import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
import AppBar from "../../components/views/AppBar";
// import SideBar from "../../components/views/SideBar/SideBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Votes } from "../../Votes";
import { LoginButton } from "../../LoginButton";
import { LogoutButton } from "../../LogoutButton";
import { CallApi2Button } from "../../CallApi2Button";
import { signinRedirect } from "../../services/userService";
// import CardSection from "../../components/views/CardSection";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function login() {
  signinRedirect();
}
export function LoginPage() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  function login() {
    signinRedirect();
  }

  return user ? (
    <Redirect to={"/"} />
  ) : (
    <>
      <AppBar />
      <Toolbar>...toolbar content...</Toolbar>
      {/* <button onClick={() => login()}>Login</button> */}
      <Container maxWidth="sm">
        <Typography component="div" style={{ height: "100vh" }}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ExitToAppIcon />}
                      onClick={() => login()}
                    >
                      Вход
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </>
  );
}
