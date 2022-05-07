// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUuyE4H2WIP05xudvf5B2-DSnqzRpMXQI",
  authDomain: "webster-car-warehouse.firebaseapp.com",
  projectId: "webster-car-warehouse",
  storageBucket: "webster-car-warehouse.appspot.com",
  messagingSenderId: "549942565228",
  appId: "1:549942565228:web:c70c00720b66877713fb49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
