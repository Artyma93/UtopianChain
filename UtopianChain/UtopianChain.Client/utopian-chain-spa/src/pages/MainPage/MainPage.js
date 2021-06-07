import React, { Component } from "react";

// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
// import CardSection from "../../components/views/CardSection";

export class MainPage extends Component {
  render() {
    return (
      <>
        <MainLayout>
          <Votes />
          <p />
          <LoginButton />
          <p/>
          <LogoutButton />
<p />

<CallApi2Button />
        </MainLayout>
      </>
    );
  }
}
