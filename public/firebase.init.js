// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDb_Z9IE7X3slgpBAM25kqZrNJSTkkggy4",
  authDomain: "fitness-studio-68e54.firebaseapp.com",
  projectId: "fitness-studio-68e54",
  storageBucket: "fitness-studio-68e54.appspot.com",
  messagingSenderId: "851326103495",
  appId: "1:851326103495:web:0907d1e8dfe5a3d74cf3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;