import generarNav from "./nav.js";
import generarFooter from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  generarNav();
  generarFooter();
});

class persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoDeNacimiento = anoDeNacimiento;
  }

  mostrarGeneracion() {
    if (this.anoDeNacimiento >= 1994 && this.anoDeNacimiento <= 2010) {
      return "Generacion Z \n Rasgo característico: IRREVERENCIA";
    } else if (this.anoDeNacimiento >= 1981 && this.anoDeNacimiento <= 1993) {
      return "Generacion Y \n Rasgo característico: FRUSTRACIÓN";
    } else if (this.anoDeNacimiento >= 1969 && this.anoDeNacimiento <= 1980) {
      return "Generacion X \n Rasgo característico: OBSESIÓN POR EL ÉXITO";
    } else if (this.anoDeNacimiento >= 1949 && this.anoDeNacimiento <= 1968) {
      return "Baby Boom \n Rasgo característico: AMBICIÓN";
    } else if (this.anoDeNacimiento >= 1930 && this.anoDeNacimiento <= 1948) {
      return "Silent Generatio \n Rasgo característico: AUSTERIDAD";
    } else {
      return "El año de nacimiento ingresado es INCORRECTO o todavía no se Determina la Generación porque es muy joven";
    }
  }

  esMayorDeEdad() {
    const currentYear = new Date().getFullYear();
    if (currentYear - this.anoDeNacimiento >= 18) {
      return "ES MAYOR DE EDAD";
    } else {
      return "ES MENOR";
    }
  }

  mostrarDatos() {
    return `
    Nombre:  ${this.nombre} \n 
    Edad: ${this.edad}\n
    DNI: ${this.DNI} \n
    Sexo: ${this.sexo} \n
    Peso: ${this.peso} \n
    Altura: ${this.altura} \n
    Año de Nacimiento: ${this.anoDeNacimiento} 
    `;
  }
}

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioDeNacimiento = parseInt(
    document.getElementById("anioDeNacimiento").value
  );

  const personaUnica = new persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anioDeNacimiento
  );

  return personaUnica;
}

function enviar() {
  const persona = crearPersona();
  const datos = persona.mostrarDatos();
  alert(datos);
}

function mostrarGeneracion() {
  const persona = crearPersona();
  const generacion = persona.mostrarGeneracion();
  alert(generacion);
}

function esMayorDeEdad() {
  const persona = crearPersona();
  const edad = persona.esMayorDeEdad();
  alert(edad);
}

const buttonCrearPersona = document.getElementById("crearPersona");
const buttonMostrarGeneracion = document.getElementById("mostrarGeneracion");
const buttonEsMayorDeEdad = document.getElementById("esMayorDeEdad");

buttonCrearPersona.addEventListener("click", enviar);
buttonMostrarGeneracion.addEventListener("click", mostrarGeneracion);
buttonEsMayorDeEdad.addEventListener("click", esMayorDeEdad);
