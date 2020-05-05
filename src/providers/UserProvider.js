import React, { createContext, useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "../firebaseConfig";

const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const { children } = props;

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth);
      // console.log(user);
      setUser(user);
      setUserLoaded(true);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user: user, userLoaded: userLoaded }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
