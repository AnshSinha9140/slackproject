import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAeQohGyoTa7bBj7RlI3O1OouB31tuirm0",
  authDomain: "slack-clone-ed9b8.firebaseapp.com",
  databaseURL: "https://slack-clone-ed9b8.firebaseio.com",
  projectId: "slack-clone-ed9b8",
  storageBucket: "slack-clone-ed9b8.appspot.com",
  messagingSenderId: "557424471065",
  appId: "1:557424471065:web:87200082cc2f36d6810e88",
  measurementId: "G-832EFD6TQE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  //initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  //signin with popup
  auth.signInWithPopup(googleProvider);

  //create user
};

export const createOrgetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    console.log("user is ", user);
    const { displayName, email, photoURL } = user;

    const createdAt = new Date();
    try {
      const User = {
        display_name: displayName,
        email: email,
        photoUrl: photoURL,
        created_at: createdAt,
      };

      await userRef.set(User);
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const signOut = () => {
  auth.signOut();
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("users").doc(uid);
    return userDocument;
  } catch (error) {
    console.log("Error", error.message);
  }
}
