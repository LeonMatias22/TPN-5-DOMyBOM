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
  segundos--;

  if (horas === 0 && minutos === 0 && segundos === -1) {
    alert("Fin");
    resetear();
  }

  if (segundos === -1) {
    segundos = 59;
    minutos--;
  }

  if (horas > 0 && minutos === -1) {
    minutos = 59;
    horas--;
  }

  if (horas === -1) {
    minutos = 59;
    horas = 0;
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
  contenedorTimer.innerText = `<p class="d-flex flex-nowrap"> ${displayHoras}: ${displayMinutos} : ${displaySegundos} </p> `;
};

const start = () => {
  horas = document.getElementById("inputHoras").value || 0;
  minutos = document.getElementById("inputMinutos").value || 0;
  segundos = document.getElementById("inputSegundos").value || 0;

  if (!isRunning) {
    isRunning = true;
    timer = setInterval(upDateTimer, 1000);
  }
};

const pausar = () => {
  isRunning = false;
  clearInterval(timer);
  reanudar.classList = "d-inLine btn btn-success";
  pausa.classList = "d-none";
};

const funcionReanudar = () => {
  pausa.classList = "d-inLine btn btn-danger";
  reanudar.classList = "d-none";
  timer = setInterval(upDateTimer, 1000);
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
const reanudar = document.getElementById("reanudar");
const reset = document.getElementById("reset");

comenzar.addEventListener("click", start);
pausa.addEventListener("click", pausar);
reanudar.addEventListener("click", funcionReanudar);
reset.addEventListener("click", resetear);

const contenedorTimer = document.getElementById("timer");
contenedorTimer.innerText = ` ${formatoDosDigitos(horas)}: ${formatoDosDigitos(
  minutos
)} : ${formatoDosDigitos(segundos)} `;
