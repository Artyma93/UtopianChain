import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeAuthenticator, makeUserManager, Callback } from "react-oidc";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { darkThemeConfigForMakeVar } from "./utils/theme/theme";
import Routing from "./routes/route";
import { AuthProvider } from "./providers/authProvider";
import userManager, { loadUserFromStorage } from "./services/userService";
import store from "./store";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    // fetch current user from cookies
    loadUserFromStorage(store);
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkThemeConfigForMakeVar}>
          <AuthProvider userManager={userManager} store={store}>
            <CssBaseline />
            <BrowserRouter>
              <Routing />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
