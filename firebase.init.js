// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyApQ8Im6UGpFXyBE5ffqj9XLEbLTd664pM',
  authDomain: 'doctors-portal-90e0d.firebaseapp.com',
  projectId: 'doctors-portal-90e0d',
  storageBucket: 'doctors-portal-90e0d.appspot.com',
  messagingSenderId: '136953136836',
  appId: '1:136953136836:web:436397711167ebeaa6eb91',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;