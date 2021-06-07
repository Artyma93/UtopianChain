import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blockChainApi } from "../../utils/api/BlockChainRESTApiCall";
import { BlockChainView } from "./BlockChainView";


export const BlockChainContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch(`https://localhost:44360/blockchain/Elections`)
    //   .then((response) => response.json)
    //   .then((json) => setData(json));
    blockChainApi("token").then((response) => setData(response));
  }, []);


  return (
    <>
      {/* <p>BlockChainContainer</p> */}

      {/* {JSON.stringify(data, null, " ")} */}

      <BlockChainView data={data} />
      {/* <h3>REST API</h3>
      <BGUCashIncomeRESTView budget={graphData} /> */}
      {/* <VotingCountView data={data} /> */}
    </>
  );
};
