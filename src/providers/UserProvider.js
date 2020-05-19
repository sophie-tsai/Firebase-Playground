import React, { createContext, useState, useEffect } from "react";

import { auth, createUserProfileDocument } from "../firebaseConfig";

const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { children } = props;

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({ uid: snapshot.id, ...snapshot.data() });
          setUserLoaded(true);
        });
      }
      setUserLoaded(true);
      setUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(false);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user: user,
        userLoaded: userLoaded,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
