export const electionsConfig = {
  endpoint: "https://localhost:44360/BlockChain",
};

export async function createBlockApi(accessToken, data, election) {
  const link = `${electionsConfig.endpoint}`;
  // const headers = new Headers();
  // const bearer = `Bearer ${accessToken}`;

  // headers.append("Authorization", bearer);

  const body = {
    data: data,
    election: election,
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
