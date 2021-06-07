import React from "react";
import { useEffect, useState } from "react";
import { electionsApi } from "../../utils/api/ElectionsRESTApiCall";
import { VoitingListView } from "./VoitingListView";

export const VotingListContainer = (props) => {
  const [data, setData] = useState([]);
  const { midleLink } = props;

  useEffect(() => {
    electionsApi("token").then((response) => setData(response));
  }, []);

  // console.log("data", data);
  return (
    <>
      {/* {JSON.stringify(data, null, " ")} */}
      {/* <h3>REST API</h3>
      <BGUCashIncomeRESTView budget={graphData} /> */}
      <VoitingListView data={data} midleLink={midleLink} />
    </>
  );
};
