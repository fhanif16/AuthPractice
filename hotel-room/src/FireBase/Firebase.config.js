// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUajjjLBHUgluGzzccn2_ufpVesLSeflk",
  authDomain: "hotel-room-booking-814b3.firebaseapp.com",
  projectId: "hotel-room-booking-814b3",
  storageBucket: "hotel-room-booking-814b3.appspot.com",
  messagingSenderId: "135124930310",
  appId: "1:135124930310:web:62f9fe38b21f0bd1d41887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;