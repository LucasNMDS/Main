import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

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

const database = getDatabase(); // Obtenha a instância do banco de dados

// Referência para o arquivo JSON no Firebase
//const jsonRef = ref(database, 'https://padaria-7f549-default-rtdb.firebaseio.com/');

// Recuperar os dados do arquivo JSON


const starCountRef = ref(database, 'produtos/' + 1);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});