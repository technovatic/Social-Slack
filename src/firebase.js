// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzWw3gzrzkTnpIvgQNt7VC03VCATviEeQ",
  authDomain: "slackv2-715dd.firebaseapp.com",
  projectId: "slackv2-715dd",
  storageBucket: "slackv2-715dd.appspot.com",
  messagingSenderId: "306045802081",
  appId: "1:306045802081:web:4b9f0600cf1792e6a1bc20",
  measurementId: "G-GPWGWXS2Y0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
