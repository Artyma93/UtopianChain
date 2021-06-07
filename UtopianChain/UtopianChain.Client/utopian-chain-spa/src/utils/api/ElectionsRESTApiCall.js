
export const electionsConfig = {
    endpoint: "https://localhost:44360/blockchain/Elections",
};

export async function electionsApi(accessToken) {
    // const headers = new Headers();
    // const bearer = `Bearer ${accessToken}`;

    // headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        // headers: headers,
    };

    return fetch(electionsConfig.endpoint, options)
        .then((response) => response.json())
        // .then((json) => console.log(json))
        .catch((error) => console.log(error));
}
