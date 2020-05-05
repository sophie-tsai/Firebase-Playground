import { firestore } from "./firebaseConfig";

const houseRef = firestore.collection("housemates");
export default houseRef;
