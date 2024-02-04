import generarNav from "./nav.js";
import generarFooter from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  generarNav();
  generarFooter();
});

const comenzar = document.getElementById("botonComenzar");
const gameSection = document.getElementById("gameSection");
const enviar = document.getElementById("enviar");
const contenedorTextoModal = document.getElementById("textoModal");

let numeroRandom;
let intentos = 0;

const renderModal = (mensaje) => {
  const textoModal = document.createElement("p");
  textoModal.innerText = mensaje;
  contenedorTextoModal.appendChild(textoModal);
};

const startGame = () => {
  numeroRandom = parseInt(Math.floor(Math.random() * 100) + 1);
  //   alert(numeroRandom);
  gameSection.className =
    "container d-flex justify-content-center align-items-center mt-5";
};

const NumeroUsuario = () => {
  const usuario = parseInt(document.getElementById("userNumber").value);

  while (usuario != numeroRandom) {
    const pista = numeroRandom > usuario ? "Es Mayor" : "Es Menor";

    renderModal(pista);

    intentos++;

    usuario = parseInt(document.getElementById("userNumber").value);
  }

  alert(`Ganate!! \nCantidad de intentos: ${intentos}`);

  //   if (usuario === numeroRandom) {
  //     const mensaje = "Ganaste!!!";
  //     alert(mensaje);
  //     resetGame();
  //   } else {
  //     renderModal(" ");
  //     const pista = numeroRandom > usuario ? "Es Mayor" : "Es Menor";

  //     renderModal(pista);
  //   }
};

const resetGame = () => {
  window.location.reload();
};

comenzar.addEventListener("click", startGame);
enviar.addEventListener("click", NumeroUsuario);
