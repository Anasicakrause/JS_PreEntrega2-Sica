let nombreIngresado = "";
let apellidoIngresado = "";
let nuevoIngreso = false;

function solicitarNombre() {
    do {
      nombreIngresado = prompt("Ingresa tu nombre");
      apellidoIngresado = prompt("Ingresa tu apellido");
      if ((nombreIngresado != "") && (apellidoIngresado != "")) {
        alert("Bienvenid@ al simulador de archsquad " + nombreIngresado + " " + apellidoIngresado)
    } else {
        alert("Error: Por favor, ingresa tu nombre y apellido");
    }
    } while ((nombreIngresado == "") && (apellidoIngresado == ""))
};

solicitarNombre();

/* function validacionDatos() {
   do {
    if ((nombreIngresado != "") && (apellidoIngresado != "")) {
        alert("Bienvenid@ al simulador de archsquad " + nombreIngresado + " " + apellidoIngresado)
    } else {
        alert("Error: Ingresar nombre y apellido");
    }while ((nombreIngresado != "") && (apellidoIngresado != ""))
}} 
 */

let tipologia = "";
let metraje = 0;
let nuevoOperacion = false;

function seleccionTipologia() {
  do {
    tipologia = prompt("Ingresa la tipología de proyecto de tu interés, Vivienda Unifamiliar (UNI), Vivienda Colectiva (COL), Comercial (COM), Urbanismo (URB) o Paisajismo (PAI)");
    metraje = Number(prompt("Ingrese el metraje estimado del proyecto"));
    valorProyecto();
    nuevoOperacion = confirm("¿Te interesa otra tipología?");
  } while (nuevoOperacion);
    
};

function valorProyecto() {
  let resultado = 0;

  switch (tipologia.toUpperCase()) {
    case "UNI":
      resultado = (metraje * 12).toFixed(2);
      alert(`Los proyectos de vivienda unifamiliar que buscas de ${metraje} m2 rondan los ${resultado} dólares`);
      break;

    case "COL":
        resultado = (metraje * 15).toFixed(2);
        alert(`Los proyectos de vivienda colectiva que buscas de ${metraje} m2 rondan los ${resultado} dólares`);
        break;

    case "COM":
        resultado = (metraje * 25).toFixed(2);
        alert(`Los proyectos de locales comerciales que buscas de ${metraje} m2 rondan los ${resultado} dólares`);
        break;

    case "URB":
        resultado = (metraje * 30).toFixed(2);
        alert(`Los proyectos urbanísticos que buscas de ${metraje} m2 rondan los ${resultado} dólares`);
        break;

    case "PAI":
        resultado = (metraje * 20).toFixed(2);
        alert(`Los proyectos paisajísticos que buscas de ${metraje} m2 rondan los ${resultado} dólares`);
        break;

    default:
        alert(`No elegiste ninguna de las opciones disponibles`);
        break;
  }

}
seleccionTipologia()
valorProyecto()