import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDQIQu_cg7jOcR_7hO0m4FUvj3aFiT5uTQ",
  authDomain: "premiumspace-dfd7a.firebaseapp.com",
  projectId: "premiumspace-dfd7a",
  storageBucket: "premiumspace-dfd7a.appspot.com",
  messagingSenderId: "609437430285",
  appId: "1:609437430285:web:b02b87f10d653ffe1a1b44",
  measurementId: "G-24LJ078ZJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
