// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw9J8ZIJvUzrf2rqEOGRZFUVTFcm0ASwU",
  authDomain: "comfystore-5ea69.firebaseapp.com",
  projectId: "comfystore-5ea69",
  storageBucket: "comfystore-5ea69.appspot.com",
  messagingSenderId: "702679782222",
  appId: "1:702679782222:web:4c9370e88269a684b0c41f",
  measurementId: "G-787CE18HYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
