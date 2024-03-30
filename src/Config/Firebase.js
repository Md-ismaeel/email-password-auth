import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAUrmTNm-C3gKD32CEiiDS8cuT9UhJYMhA",
    authDomain: "fir-react-auth-64c6d.firebaseapp.com",
    projectId: "fir-react-auth-64c6d",
    storageBucket: "fir-react-auth-64c6d.appspot.com",
    messagingSenderId: "131331085941",
    appId: "1:131331085941:web:a89c2970d8ec6ae909ca3c",
    measurementId: "G-9F59MBG8PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;