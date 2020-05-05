import React, { useContext } from "react";
import CurrentUser from "./CurrentUser";
import { UserContext } from "./providers/UserProvider";
import SignInSignUp from "./SignInSignUp";

function Authentication() {
  const { user, userLoaded } = useContext(UserContext);
  const userInfo = user ? <CurrentUser {...user} /> : <SignInSignUp />;

  return <div>{userLoaded && userInfo}</div>;
}

export default Authentication;
