import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCazsWyzb4lfOlxdnqRZ4a6NLXhdyvmigI",
  authDomain: "kristal-50e5b.firebaseapp.com",
  projectId: "kristal-50e5b",
  storageBucket: "kristal-50e5b.appspot.com",
  messagingSenderId: "250825967947",
  appId: "1:250825967947:web:807886d069ed2addc1c0ce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;