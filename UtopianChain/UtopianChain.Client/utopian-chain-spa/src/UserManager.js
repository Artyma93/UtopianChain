import { UserManager, WebStorageStateStore } from "oidc-client";
import { authConfig } from "./utils/auth/authConfig";

const settings = {
  //   userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: "http://localhost:44326",
  client_id: "client_id_js",
  response_type: "code",
  scope: "openid profile OrdersAPI",
  redirect_uri: "http://localhost:3000/callback",
  silent_redirect_uri: "http://localhost:3000/refresh",
  post_logout_redirect_uri: "http://localhost:3000",
};

// export const manager = new Oidc.UserManager(settings);
// export const manager = new UserManager(authConfig);
export const manager = new UserManager(settings);

export function logout() {
  manager.signoutRedirect();
}

export function refresh() {
  manager
    .signinSilent()
    .then(function (user) {
      print("Token refreshed", user);
    })
    .catch(function (error) {
      print("Something went wrong");
    });
}

export function callApi() {
  manager
    .getUser()
    .then(function (user) {
      if (user === null) {
        print("Unauthorized");
      }
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "https://localhost:44360/blockchain/CountingVotesByElectionAuth/1"
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          print(xhr.responseText, xhr.response);
        } else {
          print("Something went wrong", xhr);
        }
      };

      xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
      xhr.send();
    })
    .catch(function (error) {
      print(error);
    });
}

export function callApi2() {
  manager
    .getUser()
    .then(function (user) {
      if (user === null) {
        console.log("Unauthorized");
      }
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "https://localhost:44360/blockchain/CountingVotesByElectionAuth/1"
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log(xhr.responseText, xhr.response);
        } else {
          console.log("Something went wrong", xhr);
        }
      };

      xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
      xhr.send();
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function login() {
  manager.signinRedirect();
}

function print(message, data) {
    if (message) {
        document.getElementById("message").innerText = message;
    } else {
        document.getElementById("message").innerText = "";
    }
    if (data && typeof data === "object") {
        document.getElementById("data").innerText = JSON.stringify(data, null, 2);
    } else {
        document.getElementById("data").innerText = "";
    }
}

// export const user = manager
// .getUser()
// .then((user) => user)
// .then(console.log(user));