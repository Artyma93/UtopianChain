import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { voutingCountApi } from "../../utils/api/VotingCountRESTApiCall";
import { VotingCountView } from "./VotingCountView";

export const VotingCountContainer = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  console.log("id voting count", id);

  useEffect(() => {
    // fetch(`https://localhost:44360/blockchain/Elections`)
    //   .then((response) => response.json)
    //   .then((json) => setData(json));
    voutingCountApi("token", id).then((response) => setData(response));
  }, []);

  console.log("data", data);
  return (
    <>
      {/* <p>VotingCountContainer</p>
      <div>
        <h3>ID: {id}</h3>
      </div> */}
      {/* {JSON.stringify(data, null, " ")} */}

      <VotingCountView data={data} />

      {/* <h3>REST API</h3>
      <BGUCashIncomeRESTView budget={graphData} /> */}
      {/* <VotingCountView data={data} /> */}
    </>
  );
};
