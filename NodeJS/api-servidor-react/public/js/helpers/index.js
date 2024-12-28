const convertDate = (fecha) => {
  let date = new Date(fecha);
  let colDate = date.toLocaleDateString("es-CO", {
    calendar: "gregory",
    numberingSystem: "latn",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "America/Bogota"
  });
  return colDate;
}

const convertPriority = (value) => {
  switch(value){
    case 1:
      return "High"
      break;
    case 2:
      return "Medium"
      break;
    case 3:
      return "Low"
      break;
  }
}

function buscarTareas(textoABuscar, arregloDeBusqueda) {
  const textoMinuscula = textoABuscar.toLowerCase();
  const regex = new RegExp(textoMinuscula, 'i'); // Búsqueda insensible a mayúsculas y minúsculas

  const resultados = arregloDeBusqueda.filter(tarea => regex.test(tarea.title.toLowerCase()));

  return resultados;
}

function buscarPorPriodidad(prioridad, arreglo){
  const resultado = arreglo.filter(tarea => tarea.priority === parseInt(prioridad));
  return resultado;
}