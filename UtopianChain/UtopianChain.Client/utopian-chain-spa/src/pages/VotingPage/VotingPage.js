import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { VotingContainer } from "./VotingContainer";
import { VotingListContainer } from "./VotingListContainer";

export class VotingPage extends Component {
  render() {
    const midleLink = "voting";
    return (
      <>
        <MainLayout>
          <p />
          {/* <p>VotingPage</p> */}
          <VotingContainer />
        </MainLayout>
      </>
    );
  }
}
