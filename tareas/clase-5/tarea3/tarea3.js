document.querySelector('#botonSumar').onclick = function(){
  const horas = document.createTextNode(document.querySelector('#horas').value);
  const minutos = document.createTextNode(document.querySelector('#minutos').value);
  const segundos = document.createTextNode(document.querySelector('#segundos').value);

  const nodoP = document.querySelector('#duracionTotal');
  const strongHoras = document.querySelector('#strong-horas');
  const strongMinutos = document.querySelector('#strong-minutos');
  const strongSegundos = document.querySelector('#strong-segundos');
  strongHoras.appendChild(horas);
  strongMinutos.appendChild(minutos);
  strongSegundos.appendChild(segundos);
  nodoP.appendChild(strongHoras);
  nodoP.appendChild(strongMinutos);
  nodoP.appendChild(strongSegundos);
}
