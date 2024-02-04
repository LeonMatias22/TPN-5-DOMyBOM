import generarNav from "./nav.js";
import generarFooter from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  generarNav();
  generarFooter();
});

const fechaActual = new Date();

const mostrarFecha = () => {
  var mesesDelAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  var diasDeLaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const contenedeorFecha = document.getElementById("contenedorFecha");

  let anio = fechaActual.getFullYear();
  let mes = fechaActual.getMonth();
  let fecha = fechaActual.getDate();
  let dia = fechaActual.getDay();
  const renderFecha = document.createElement("p");
  renderFecha.innerText = ` ${diasDeLaSemana[dia]} ${fecha} de ${mesesDelAnio[mes]} del ${anio}`;
  contenedeorFecha.appendChild(renderFecha);
};

const mostrarHora = () => {
  const fechaActual = new Date();
  const contenedorHora = document.getElementById("contenedorHora");

  let horas = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();
  let franjaDelDia = horas >= 12 ? "PM" : "AM";

  contenedorHora.textContent = ` ${dosDigitos(horas)} : ${dosDigitos(
    minutos
  )} : ${dosDigitos(segundos)} ${franjaDelDia} `;

  function dosDigitos(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
  }
};

mostrarFecha();
setInterval(mostrarHora, 1000);
mostrarHora();
