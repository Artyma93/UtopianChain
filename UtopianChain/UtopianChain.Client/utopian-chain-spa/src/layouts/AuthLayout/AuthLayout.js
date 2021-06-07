import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import LoginPage from "../../../../sfedu-react-apollo-next-test2-v2/pages/login";



export function AuthLayout(props) {
  return (
    <>
      <AuthenticatedTemplate>{props.children}</AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
}
