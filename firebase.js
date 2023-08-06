import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMPrNMBSmQLuvbIdsRIbm8Uh9voxKP8RQ",
  authDomain: "react-nodes-f4273.firebaseapp.com",
  projectId: "react-nodes-f4273",
  storageBucket: "react-nodes-f4273.appspot.com",
  messagingSenderId: "529392058844",
  appId: "1:529392058844:web:998c129a5e995564414f19",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
