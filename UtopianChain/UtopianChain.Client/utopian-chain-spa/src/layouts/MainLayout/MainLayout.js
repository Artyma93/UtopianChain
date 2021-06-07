import React, { Component } from "react";

// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
import AppBar from "../../components/views/AppBar";
import SideBar from "../../components/views/SideBar/SideBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
// import CardSection from "../../components/views/CardSection";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        {/* // Тут мы делим страницу по строкам */}
        <AppBar />
        {/* Этот компонент нужен, чтобы компоненты которые идут дальше не проваливались под AppBar */}
        <Toolbar>...toolbar content...</Toolbar>

        <Container fixed>
          {/* <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          > */}
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={4}>
                <Box position="fixed">
                  <SideBar position="fixed" />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <>
                  {this.props.children}
                  <p />
                  {/* <CardSection /> */}

                  <p />

                  {/* <SideBar />
                  <SideBar /> */}
                </>
              </Grid>
            </Grid>
          {/* </Typography> */}
        </Container>
      </>
    );
  }
}
