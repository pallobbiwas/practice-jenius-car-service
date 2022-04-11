// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSLGs3WjdOWBnSZuJvsr5QoM35aHelTco",
  authDomain: "practice-genius-car-service.firebaseapp.com",
  projectId: "practice-genius-car-service",
  storageBucket: "practice-genius-car-service.appspot.com",
  messagingSenderId: "300082093623",
  appId: "1:300082093623:web:ddaba97b16407bd49a29b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;