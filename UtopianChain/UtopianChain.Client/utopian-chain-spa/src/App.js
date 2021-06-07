import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeAuthenticator, makeUserManager, Callback } from "react-oidc";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./pages/LoginPage";

import logo from "./logo.svg";
import "./App.css";
import { Votes } from "./Votes";
import { darkThemeConfigForMakeVar } from "./utils/theme/theme";
// import { BrowserRouter, Router } from "react-router-dom";
import { authConfig } from "./utils/auth/authConfig";
import Routing from "./routes/route";
import { AuthProvider } from "./providers/authProvider";
import { manager } from "./UserManager";
import { Routes } from "./routes/routes";
import { MainPage } from "./pages/MainPage/MainPage";
import Login from "./pages/login";
import { SignoutOidc } from "./pages/signout-oidc";
import { SigninOidc } from "./pages/signin-oidc";
import userManager from "./services/userService";
import { ProtectedRoute } from "./utils/protectedRoute";


function App() {
  // const user = manager.getUser().then((user) => user);
  // console.log(user);
  return (
    <>
      <ThemeProvider theme={darkThemeConfigForMakeVar}>
        {/* <AuthProvider>
          <CssBaseline /> */}
          {/* <BrowserRouter children={Routes} basename={"/"}> */}

          {/* {user ? <LoginPage /> : <Routing />} */}
          {/* {user = manager.getUser().then((user) => user)} */}

          {/* {user === null ? <LoginPage /> : <Routing />} */}

          {/* <Routing /> */}
          {/* </BrowserRouter> */}
          {/* <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </AuthProvider>*/}
      {/* <p>App</p> */}

      <AuthProvider userManager={userManager}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signout-oidc" component={SignoutOidc} />
            <Route path="/signin-oidc" component={SigninOidc} />
            <ProtectedRoute exact path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      </ThemeProvider> 
    </>
  );
}

export default App;
