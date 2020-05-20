import { firestore } from "./firebaseConfig";

export const houseRef = firestore.collection("housemates");
export const userCollectionRef = firestore.collection("users");
