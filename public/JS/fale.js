  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
const messagesRef = firebase.database().ref('mensagens');

// Envio do formulário
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Pegue os valores do formulário
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  // Salve os dados no Firebase
  saveMessage(name, email, message);

  // Limpe o formulário após o envio
  document.getElementById('contactForm').reset();
}

// Salvar mensagem no Firebase
function saveMessage(name, email, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}