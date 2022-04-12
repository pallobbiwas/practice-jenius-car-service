// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyYxn26694iFvgA8TRQ4joNVYtM40qnvw",
  authDomain: "practice-ginis.firebaseapp.com",
  projectId: "practice-ginis",
  storageBucket: "practice-ginis.appspot.com",
  messagingSenderId: "433736940494",
  appId: "1:433736940494:web:bd3d4c3d48bf5670cfc99f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;