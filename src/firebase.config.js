import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEO_Iw2tkkhUTPcYEaOlfdLWedilSiyDI",
  authDomain: "ooooo-39ce8.firebaseapp.com",
  databaseURL: "https://ooooo-39ce8-default-rtdb.firebaseio.com",
  projectId: "ooooo-39ce8",
  storageBucket: "ooooo-39ce8.appspot.com",
  messagingSenderId: "712417151035",
  appId: "1:712417151035:web:484802ebb2d9ecb93bb41e",
  measurementId: "G-C3FX7HCZ09"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
