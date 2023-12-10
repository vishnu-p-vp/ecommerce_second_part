// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "@firebase/firestore"
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc8h37zWCpzYKkr_Is9OR1hIDJNxV1vos",
  authDomain: "ecommerce-89760.firebaseapp.com",
  projectId: "ecommerce-89760",
  storageBucket: "ecommerce-89760.appspot.com",
  messagingSenderId: "904793896926",
  appId: "1:904793896926:web:0715f69a98f277822c0f4f",
  measurementId: "G-JGLF4RSJ41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth(app);
export const db=getFirestore(app);
// export const auth=getAuth(app);