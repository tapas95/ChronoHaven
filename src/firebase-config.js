import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",
  authDomain: "chronohaven.firebaseapp.com",
  projectId: "chronohaven",
  storageBucket: "chronohaven.firebasestorage.app",
  messagingSenderId: "598935116715",
  appId: "1:598935116715:web:3f7801faf73ec3e72450ee",
  measurementId: "G-KC1GKPTGVF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };