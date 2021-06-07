import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { VotingListContainer } from "./VotingListContainer";

export class VotingListPageForVotingPage extends Component {
  render() {
    const midleLink = "voting-count";
    return (
      <>
        <MainLayout>
        <p>VotingListPageForVotingPage</p>
          <VotingListContainer midleLink={midleLink}/>
        </MainLayout>
      </>
    );
  }
}
