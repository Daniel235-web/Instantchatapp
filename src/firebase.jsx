
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBbqeetwEtAhWDqv25pmUW1-aIZMPmeEIM",
  authDomain: "instantchat-348e1.firebaseapp.com",
  projectId: "instantchat-348e1",
  storageBucket: "instantchat-348e1.appspot.com",
  messagingSenderId: "680484034977",
  appId: "1:680484034977:web:ae00a55c00fc5fc836d3e0"
};

const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const db = getFirestore(app);