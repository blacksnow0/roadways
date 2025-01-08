// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSx4IZMwf-gzN1vHpBfcn3vkHIB5A9xX8",
  authDomain: "road-ways.firebaseapp.com",
  projectId: "road-ways",
  storageBucket: "road-ways.firebasestorage.app",
  messagingSenderId: "664754152939",
  appId: "1:664754152939:web:a4a0c6dbd16c0dde5365ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Google sign-in sucessfull", user);
    return user;
  } catch (error) {
    console.error("Error loggin in with user ", error.message);
    throw error;
  }
};

export { auth, googleSignIn };

export default app;
