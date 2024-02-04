import generarNav from "./nav.js";
import generarFooter from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  generarNav();
  generarFooter();
});

let listaDeTareas = [];

const boton = document.getElementById("boton");

function renderizarTareas(list) {
  const ul = document.getElementById("ul");
  ul.innerHTML = "";
  if (list.length !== 0) {
    list.map((tarea, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="d-flex justify-content-between align-items-center">
      <p> ${tarea}</p>
      <button class="btn btn-danger" onclick="deleteItem(${i})" id="botonDelete">Delete</button>
      </div>`;
      ul.appendChild(li);
    });
  }
}

const deleteItem = (i) => {
  listaDeTareas = JSON.parse(localStorage.getItem("tareas"));
  listaDeTareas.splice(i, 1);
  localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
  renderizarTareas(listaDeTareas);
};

const agregarTarea = (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  if (input.length === 0) {
    alert("no se ingresó ninguna tarea");
  } else {
    listaDeTareas.push(input);
    localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
    renderizarTareas(listaDeTareas);
  }
};

const testBoton = () => {
  alert("test correcto!");
};

const cargaInicial = () => {
  listaDeTareas = JSON.parse(localStorage.getItem("tareas")) || [];

  renderizarTareas(listaDeTareas);
  document.getElementById("input").focus();
};

boton.addEventListener("click", agregarTarea);

cargaInicial();
