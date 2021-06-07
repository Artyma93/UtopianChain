
export const electionsConfig = {
    endpoint: "https://localhost:44360/blockchain/Blocks",
};

export async function blockChainApi(accessToken) {
    const link = `${electionsConfig.endpoint}`;
    // const headers = new Headers();
    // const bearer = `Bearer ${accessToken}`;

    // headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        // headers: headers,
    };

    return fetch(link, options)
        .then((response) => response.json())
        // .then((json) => console.log(json))
        .catch((error) => console.log(error));
}
