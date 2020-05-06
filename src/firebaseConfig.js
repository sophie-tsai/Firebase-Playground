import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "fir-playground-95e29.firebaseapp.com",
  databaseURL: "https://fir-playground-95e29.firebaseio.com",
  projectId: "fir-playground-95e29",
  storageBucket: "fir-playground-95e29.appspot.com",
  messagingSenderId: "795038813155",
  appId: "1:795038813155:web:f6b905ee433d61d2a22ed6",
  measurementId: "G-F3S3RPPPJM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  //if logged out, do nothing
  if (!user) return;

  //get a reference to the place in the database where a user may or may not exist
  const userRef = firestore.doc(`users/${user.uid}`);

  //go and fetch the document from that location
  const snapshot = await userRef.get();
  // const snapshotData = snapshot.data();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("error fetching user", error.message);
  }
};

export default firebase;
