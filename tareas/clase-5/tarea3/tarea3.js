document.querySelector('#botonSumar').onclick = function(){
  const horas = document.querySelector('#horas').value;
  const minutos = document.querySelector('#minutos').value;
  const segundos = document.querySelector('#segundos').value;

  let strongHoras = document.querySelector('#strong-horas');
  let strongMinutos = document.querySelector('#strong-minutos');
  let strongSegundos = document.querySelector('#strong-segundos');
  let nodoP = document.querySelector('#parrafo');

  nodoP.textContent = (`Tu video dura: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`)
  
}
