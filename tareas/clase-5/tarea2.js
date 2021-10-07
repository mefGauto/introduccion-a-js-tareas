document.querySelector('#subir-info').onclick = function(){
  const primerNombre = document.createTextNode(document.querySelector('#nombre1').value);
  const segundoNombre = document.createTextNode(document.querySelector('#nombre2').value);
  const apellido = document.createTextNode(document.querySelector('#apellido').value);
  const edad = document.createTextNode(document.querySelector('#edad').value);
  let nodoDiv = document.querySelector('#resultado');
  let nuevoParrafo = document.createElement('p');
  nuevoParrafo.appendChild(primerNombre);
  nuevoParrafo.appendChild(segundoNombre);
  nuevoParrafo.appendChild(apellido);
  nuevoParrafo.appendChild(edad);
  nodoDiv.appendChild(nuevoParrafo);
  return false;
}
