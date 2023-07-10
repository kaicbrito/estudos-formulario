const firebaseConfig = {
  // Sua configuração do Firebase
  apiKey: "AIzaSyDjFXfPDf82HkZS9tqUsGdNdL2KUPlkcuY",
  authDomain: "projeto-c9ede.firebaseapp.com",
  databaseURL: "https://projeto-c9ede-default-rtdb.firebaseio.com",
  projectId: "projeto-c9ede",
  storageBucket: "projeto-c9ede.appspot.com",
  messagingSenderId: "934834339658",
  appId: "1:934834339658:web:9824fc569ebbecec6c8bb3",
  measurementId: "G-7BLF24G5N3",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Importações do Firebase (agora aqui no arquivo JavaScript)
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Ou outras importações necessárias

// Escuta o evento de envio do formulário
document
  .getElementById("registrationform")
  .addEventListener("submit", formSubmit);

// Função para lidar com o envio do formulário
function formSubmit(e) {
  e.preventDefault();

  // Obtém os valores do formulário
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let bio = document.querySelector("#bio").value;
  let job = document.querySelector("#job").value;
  let interest = document.querySelector("#interest").value;

  // Envia os valores para o Firebase
  sendMessage(name, email, password, bio, job, interest);
}

// Envia a mensagem para o Firebase
function sendMessage(name, email, password, bio, job, interest) {
  const database = getDatabase();

  set(ref(database, "users/" + Math.floor(Math.random() * 10000000)), {
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest,
  })
    .then(() => {
      // Mostra a mensagem de alerta
      document.querySelector(".alert").style.display = "block";

      // Esconde a mensagem de alerta após sete segundos
      setTimeout(function () {
        document.querySelector(".alert").style.display = "none";
      }, 7000);

      // Reseta o formulário
      document.getElementById("registrationform").reset();
    })
    .catch((error) => {
      alert(error);
    });
}
