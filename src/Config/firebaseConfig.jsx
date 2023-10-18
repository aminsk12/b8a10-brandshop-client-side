// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3ywtQb2kT9Hr65F-B_toYubaMGB_-JKE",
  authDomain: "automotive-71114.firebaseapp.com",
  projectId: "automotive-71114",
  storageBucket: "automotive-71114.appspot.com",
  messagingSenderId: "517347786872",
  appId: "1:517347786872:web:5c6e7ab0cc83d3ec41ed8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);