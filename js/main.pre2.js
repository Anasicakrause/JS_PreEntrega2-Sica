let proyectos = [
    {
      id: 1,
      tipologiaProyecto: "UNI",
      precioMetro: 4,
    },
    {
      id: 2,
      tipologiaProyecto: "COL",
      precioMetro: 6,
    },
    {
      id: 3,
      tipologiaProyecto: "COM",
      precioMetro: 9,
    },
    {
      id: 4,
      tipologiaProyecto: "URB",
      precioMetro: 12,
    },
    {
      id: 5,
      tipologiaProyecto: "PAI",
      precioMetro: 10,
    },
  ];
  
  let filtro = [];
  let seleccion = "";
  let tipo = "";
  let metraje = 0;
 let precioPromedio = 0;

function seleccionTipologia() {
  seleccion = prompt("Ingresa la tipología de proyecto de tu interés, Vivienda Unifamiliar (UNI), Vivienda Colectiva (COL), Comercial (COM), Urbanismo (URB) o Paisajismo (PAI)");
  tipo = proyectos.find((p) => p.tipologiaProyecto.toUpperCase() === seleccion.toUpperCase());
  if (tipo) {
    metraje = parseInt(prompt("Ingrese el metraje estimado del proyecto"));
    filtro.push({
      tipologia: tipo.tipologiaProyecto,
      metraje: metraje,
      subtotal: tipo.precioMetro * metraje, 
    });
    calcularValorPromedio();
    confirmarFiltro();
  }else {
    alert ("La tipologia seleccionada no existe. Por favor, vuelva a intentarlo.");
  };
} 
let subTotal = 0;

function calcularValorPromedio() {
subTotal = metraje * tipo.precioMetro;
precioPromedio = alert((`Los proyectos que buscas rondan los ${subTotal} dólares.`))
}

function confirmarFiltro() {
  
  filtro.forEach((item) => {
    alert(` Filtros de busqueda seleccionados - ${item.tipologia} ${item.metraje} m2`);
  });
}
console.log(filtro);

seleccionTipologia(); 
