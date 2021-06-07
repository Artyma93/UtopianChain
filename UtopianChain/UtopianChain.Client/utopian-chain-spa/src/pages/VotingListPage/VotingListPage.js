import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { VotingListContainer } from "./VotingListContainer";

export class VotingListPage extends Component {
  render() {
    const midleLink = "voting-count";
    return (
      <>
        <MainLayout>
        {/* <p>VotingListPage</p> */}
          <VotingListContainer midleLink={midleLink}/>
        </MainLayout>
      </>
    );
  }
}
