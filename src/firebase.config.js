// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpZTu1uNtlk5e4XvGXTzAxb1K2xG6CxIM",
  authDomain: "simple-todo-vue-f1df6.firebaseapp.com",
  projectId: "simple-todo-vue-f1df6",
  storageBucket: "simple-todo-vue-f1df6.appspot.com",
  messagingSenderId: "962276805142",
  appId: "1:962276805142:web:ceded856509d87e7e30337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app