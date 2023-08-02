// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsIoiSejKT-jO0CjGoH_4Ec83IK8M86OU",
  authDomain: "todo-list-559a6.firebaseapp.com",
  projectId: "todo-list-559a6",
  storageBucket: "todo-list-559a6.appspot.com",
  messagingSenderId: "1037799953251",
  appId: "1:1037799953251:web:040625b02f5f8f92b27956",
  measurementId: "G-HM2M2E1HQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}