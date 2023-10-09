import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1JULeCpn2bAtPZUQxgrq_xaWY-QpCiio",
  authDomain: "ootp-4cd4a.firebaseapp.com",
  databaseURL: "https://ootp-4cd4a-default-rtdb.firebaseio.com",
  projectId: "ootp-4cd4a",
  storageBucket: "ootp-4cd4a.appspot.com",
  messagingSenderId: "496535491346",
  appId: "1:496535491346:web:f0aa17e4fdab18d1fad9cb",
  measurementId: "G-XB0H99VVXG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
