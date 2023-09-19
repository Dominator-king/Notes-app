// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPrNMBSmQLuvbIdsRIbm8Uh9voxKP8RQ",
  authDomain: "react-nodes-f4273.firebaseapp.com",
  projectId: "react-nodes-f4273",
  storageBucket: "react-nodes-f4273.appspot.com",
  messagingSenderId: "529392058844",
  appId: "1:529392058844:web:998c129a5e995564414f19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
