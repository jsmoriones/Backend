import {LibroDigital, LibroFisico} from "./index2.js";

const otrosCamposLibro = document.querySelector("#otrosCamposLibro");
const enviarLibro = document.querySelector("#enviarLibro");
const libroInputRadio = document.querySelectorAll('input[name="libroInputRadio"]');
const listaDeLibros = document.querySelector("#listaDeLibros");
const validError = document.querySelector("#validError");
const listarLibros = document.querySelector("#listarLibros");

const librosDigital = new LibroDigital();
const librosFisico = new LibroFisico();

libroInputRadio.forEach(input => {
  input.addEventListener("change", function(e){
    e.preventDefault()
    if(input.value == "digital"){
      otrosCamposLibro.innerHTML = `
        <div class="mb-6">
          <label for="urlweb" class="block mb-2 text-sm font-medium text-gray-900">URL Web</label>
          <input type="text" id="urlweb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Escribe la URL del libro" required />
        </div>
      `;
    }else if(input.value == "fisico"){
      otrosCamposLibro.innerHTML = `
        <div class="mb-6">
          <label for="isbn" class="block mb-2 text-sm font-medium text-gray-900">ISBN</label>
          <input type="text" id="isbn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Escribe el isbn de libro" required />
        </div>
      `;
    }
  })
});

enviarLibro.addEventListener("click", function(e) {
  e.preventDefault();

  const titulo = document.querySelector("#titulo").value;
  const autor = document.querySelector("#autor").value;
  
  libroInputRadio.forEach(input => {
    if(input.value == "digital" && input.checked){
      const urlweb = document.querySelector("#urlweb").value;
      const nuevoLibro = new LibroDigital(titulo, autor, urlweb);
      librosDigital.agregarLibro( nuevoLibro );
    }else if(input.value == "fisico" && input.checked){
      const isbn = document.querySelector("#isbn").value;
      const nuevoLibro = new LibroFisico(titulo, autor, isbn);
      librosFisico.agregarLibro( nuevoLibro );
    }
  });
})


listarLibros.addEventListener("click", function(e){
  e.preventDefault();
  let resultado;
  listaDeLibros.innerHTML = "";
  if(librosDigital.libros.length > 0){

    librosDigital.libros.forEach(libro => {
      resultado += `
        <div class="p-2 bg-zinc-400 mb-2 rounded-lg">
          <p class="text-slate-700 text-md">Titulo del libro: <span class="font-bold">${libro.titulo}</span></p>
          <p class="text-slate-700 text-md">Autor del libro: <span class="font-bold">${libro.autor}</span></p>
          <p class="text-slate-700 text-md">URL Web: <span class="font-bold">${libro.urlWeb}</span></p>
        </div>
      `;
    })
  }
  if(librosFisico.libros.length > 0){

    librosFisico.libros.forEach(libro => {
      resultado += `
        <div class="p-2 bg-zinc-400 mb-2 rounded-lg">
          <p class="text-slate-700 text-md">Titulo del libro: <span class="font-bold">${libro.titulo}</span></p>
          <p class="text-slate-700 text-md">Autor del libro: <span class="font-bold">${libro.autor}</span></p>
          <p class="text-slate-700 text-md">ISBN: <span class="font-bold">${libro.isbn}</span></p>
        </div>
      `;
    })
  }
  if(librosFisico.libros.length < 1){
    validError.innerHTML = "<p class='mt-5 bg-red-500 p-2 text-center text-white text-sm font-bold'>No hay Resultados que mostrar</p>";
  }

  listaDeLibros.innerHTML = resultado;
});