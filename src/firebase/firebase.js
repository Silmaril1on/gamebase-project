import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHetAVWlXIucF1SXeHpQFWdtlUNkrO0XE",
  authDomain: "gamebase-project.firebaseapp.com",
  projectId: "gamebase-project",
  storageBucket: "gamebase-project.appspot.com",
  messagingSenderId: "573507048589",
  appId: "1:573507048589:web:4bbf97607e6f120bae7ec4",
  measurementId: "G-9K40YLFRRJ",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
