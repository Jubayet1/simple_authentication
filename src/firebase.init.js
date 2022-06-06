// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_6cl9ZekcoQTRE450x1zCtM81voR2atU",
  authDomain: "simple-auth-1d088.firebaseapp.com",
  projectId: "simple-auth-1d088",
  storageBucket: "simple-auth-1d088.appspot.com",
  messagingSenderId: "4328218554",
  appId: "1:4328218554:web:d4515cc65d4194a4f0c783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider ();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    console.log(result);
    // ...
  }).catch((error) => {
    console.log(error);
  });
};

export const signInWithFB = () => {
  signInWithPopup(auth, fbProvider)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
};

export const signInWithGitHub = () => {
  signInWithPopup(auth, gitHubProvider)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
};