import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Callback } from "../components/auth/callback";
import { Logout } from "../components/auth/logout";
import { LogoutCallback } from "../components/auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
// import { Register } from "../components/auth/register";
import { SilentRenew } from "../components/auth/silentRenew";
// import {PublicPage} from "../components/publicPage"
// import {PrivatePage} from "../components/privatePage"

import { MainPage } from "../pages/MainPage/MainPage";
import { CreateElectionPage } from "../pages/CreateElectionPage/CreateElectionPage";
import { VotingListPage } from "../pages/VotingListPage/VotingListPage";
import { VotingPage } from "../pages/VotingPage/VotingPage";
import { VotingCountPage } from "../pages/VotingCountPage/VotingCountPage";
import { BlockChainPage } from "../pages/BlockChainPage/BlockChainPage";
import { VotingListPageForVotingPage } from "../pages/VotingPage/VotingListPageForVotingPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignoutOidc } from "../pages/signout-oidc";
import { SigninOidc } from "../pages/signin-oidc";
import { ProtectedRoute } from "../utils/protectedRoute";
import { Login } from "../components/auth/login";
import { LoginPageBebop } from "../pages/LoginPageBebop";

export default class Routing extends React.Component {
  render() {
    return (
      <>
        <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signout-oidc" component={SignoutOidc} />
        <Route path="/signin-oidc" component={SigninOidc} />
        {/* <Route exact={true} path="/signin-oidc" component={Callback} /> */}
        {/* <Route exact={true} path="/logout" component={Logout} /> */}
        {/* <Route exact={true} path="/logout/callback" component={LogoutCallback} /> */}
        {/* <Route exact={true} path="/register" component={Register} /> */}
        {/* <Route exact={true} path="/silentrenew" component={SilentRenew} /> */}

          <Route path="/" component={MainPage} exact></Route>
          <ProtectedRoute path="/create-election" component={CreateElectionPage} exact></ProtectedRoute>
          <ProtectedRoute path="/voting-list" component={VotingListPage} exact></ProtectedRoute>
          <ProtectedRoute path="/voting" component={VotingListPageForVotingPage} exact></ProtectedRoute>
          <ProtectedRoute path="/voting/:id" component={VotingPage} exact></ProtectedRoute>
          <ProtectedRoute path="/voting-count/:id" component={VotingCountPage} exact></ProtectedRoute>
          <ProtectedRoute path="/block-chain" component={BlockChainPage} exact></ProtectedRoute>

          {/* <Redirect to="/" /> */}
        </Switch>
      </>
    );
  }
}
