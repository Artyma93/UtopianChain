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

export default class Routing extends React.Component {
  render() {
    return (
      <>
        <Switch>
        <Route exact={true} path="/signin-oidc" component={Callback} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route exact={true} path="/logout/callback" component={LogoutCallback} />
        {/* <Route exact={true} path="/register" component={Register} /> */}
        <Route exact={true} path="/silentrenew" component={SilentRenew} />

          <Route path="/" component={MainPage} exact></Route>
          <PrivateRoute path="/create-election" component={CreateElectionPage} exact></PrivateRoute>
          <PrivateRoute path="/voting-list" component={VotingListPage} exact></PrivateRoute>
          <PrivateRoute path="/voting" component={VotingListPageForVotingPage} exact></PrivateRoute>
          <PrivateRoute path="/voting/:id" component={VotingPage} exact></PrivateRoute>
          <PrivateRoute path="/voting-count/:id" component={VotingCountPage} exact></PrivateRoute>
          <PrivateRoute path="/block-chain" component={BlockChainPage} exact></PrivateRoute>

          {/* <Redirect to="/" /> */}
        </Switch>
      </>
    );
  }
}
