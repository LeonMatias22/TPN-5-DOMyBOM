import generarNav from "./nav.js";
import generarFooter from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  generarNav();
  generarFooter();
});

let timer;
let segundos = 0;
let minutos = 0;
let horas = 0;
let isRunning = false;

const upDateTimer = () => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }
  renderizarTimer();
};

const formatoDosDigitos = (time) => {
  return time < 10 ? `0${time}` : time;
};

const renderizarTimer = () => {
  const displaySegundos = formatoDosDigitos(segundos);
  const displayMinutos = formatoDosDigitos(minutos);
  const displayHoras = formatoDosDigitos(horas);

  const contenedorTimer = document.getElementById("timer");
  contenedorTimer.innerText = ` ${displayHoras}: ${displayMinutos} : ${displaySegundos} `;
};

const start = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(upDateTimer, 1000);
  }
};

const pausar = () => {
  isRunning = false;
  clearInterval(timer);
};

const resetear = () => {
  isRunning = false;
  clearInterval(timer);

  segundos = 0;
  minutos = 0;
  horas = 0;

  renderizarTimer();
};

const comenzar = document.getElementById("comenzar");
const pausa = document.getElementById("pausa");
const reset = document.getElementById("reset");

comenzar.addEventListener("click", start);
pausa.addEventListener("click", pausar);
reset.addEventListener("click", resetear);
