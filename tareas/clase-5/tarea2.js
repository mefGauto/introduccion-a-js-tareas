document.querySelector('#subir-info').onclick = function(){
  const primerNombre = document.querySelector('#nombre1').value;
  const segundoNombre = document.querySelector('#nombre2').value;
  const apellido = document.querySelector('#apellido').value;
  const edad = document.querySelector('#edad').value;

  const nodoDiv = document.querySelector('div');
  const nuevoParrafo = document.createElement('p');
  nodoDiv.appendChild(nuevoParrafo)
  nuevoParrafo.appendChild(primerNombre);
  nuevoParrafo.appendChild(segundoNombre);
  nuevoParrafo.appendChild(apellido);
  nuevoParrafo.appendChild(edad)
  return false;
}
