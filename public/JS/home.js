/*  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBpbvLxFo826dsrw-YYGWKbG71sDNmbuvs",
    authDomain: "padaria2-17200.firebaseapp.com",
    databaseURL: "https://padaria2-17200-default-rtdb.firebaseio.com",
    projectId: "padaria2-17200",
    storageBucket: "padaria2-17200.appspot.com",
    messagingSenderId: "34872987901",
    appId: "1:34872987901:web:3ff1d0fd569e6447a0ae94",
    measurementId: "G-QKY729F230"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
*/

function toggleNav() {
    var navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
}
export { app};
