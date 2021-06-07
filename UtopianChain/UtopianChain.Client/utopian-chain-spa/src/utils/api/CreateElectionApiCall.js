export const electionsConfig = {
  endpoint: "https://localhost:44360/BlockChain/CreateElection",
};

export async function createElectionApi(accessToken, data) {
  const link = `${electionsConfig.endpoint}`;
  // const headers = new Headers();
  // const bearer = `Bearer ${accessToken}`;

  // headers.append("Authorization", bearer);

  const body = {
    description: data,
  };

  const options = {
    method: "Post",
    mode: "cors",
    // headers: headers,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    // body: body,
  };

  return (
    fetch(link, options)
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .catch((error) => console.log(error))
  );
}
