// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX1o4X99zI1LHvXQyNUQf0GvmVYF9wZSQ",
  authDomain: "assignment-12-c125c.firebaseapp.com",
  projectId: "assignment-12-c125c",
  storageBucket: "assignment-12-c125c.appspot.com",
  messagingSenderId: "714832786087",
  appId: "1:714832786087:web:96a7e8d329708a8bc32182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth=getAuth(app) 

export default auth