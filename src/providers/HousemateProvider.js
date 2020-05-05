import React, { useEffect, useState, createContext } from "react";
import houseRef from "../firebase";

const HousemateContext = createContext();

function HousemateProvider(props) {
  const [housemates, setHousemates] = useState([]);
  const { children } = props;

  useEffect(() => {
    const unsubscribeFromFirestore = houseRef.onSnapshot((snapshot) => {
      const housemateInfo = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          name: data.name,
          gender: data.gender,
          user: { displayName: data.user.displayName, uid: data.user.uid },
        };
      });
      setHousemates(housemateInfo);
    });
    return () => {
      unsubscribeFromFirestore();
    };
  }, []);

  return (
    <HousemateContext.Provider value={housemates}>
      {children}
    </HousemateContext.Provider>
  );
}

export { HousemateProvider, HousemateContext };
