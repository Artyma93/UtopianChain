import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { CreateElectionContainer } from "./CreateElectionContainer";

export class CreateElectionPage extends Component {
  render() {
    return (
      <>
        <MainLayout>
        <p>Укажите название нового голосования</p>
          <CreateElectionContainer />
        </MainLayout>
      </>
    );
  }
}
