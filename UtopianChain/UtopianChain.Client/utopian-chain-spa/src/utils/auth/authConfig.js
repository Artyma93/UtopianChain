export const authConfig = {
  authority: "https://localhost:44325",
  client_id: "client_id_js",
  response_type: "code",
  scope: "openid profile OrdersAPI",
  redirect_uri: "http://localhost:3000/authentication/callback",
  silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
  post_logout_redirect_uri: "http://localhost:3000/",
  automaticSilentRenew: true,
  loadUserInfo: true,
};
