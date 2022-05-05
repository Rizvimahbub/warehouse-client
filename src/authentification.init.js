// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIYZUcfGpzOPSBQKDKwQztDLz0GGPs9Vk",
  authDomain: "bikers-heaven.firebaseapp.com",
  projectId: "bikers-heaven",
  storageBucket: "bikers-heaven.appspot.com",
  messagingSenderId: "273904639176",
  appId: "1:273904639176:web:6fba5be236c355057bd9fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;