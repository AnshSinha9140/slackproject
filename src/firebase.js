import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPzCx_CHe-JWMFQLPkzP0Ey-NUEpcdbWI",
  authDomain: "slack-920d4.firebaseapp.com",
  databaseURL: "https://slack-920d4.firebaseio.com",
  projectId: "slack-920d4",
  storageBucket: "slack-920d4.appspot.com",
  messagingSenderId: "190644548744",
  appId: "1:190644548744:web:60447b40501d3a4025db3d",
  measurementId: "G-WMREEH49V9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
}