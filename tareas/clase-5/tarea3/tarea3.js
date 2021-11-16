let nodoP = document.querySelector('#parrafo');
let lista = document.querySelector('#listaVideos')
let video;

document.querySelector('#botonSumar').onclick = function(){
  const horas = document.querySelector('#horas').value;
  const minutos = document.querySelector('#minutos').value;
  const segundos = document.querySelector('#segundos').value;

  let nodoLi = document.createElement('li');
  video = document.createTextNode( `Tu video dura: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
  nodoLi.appendChild(video);
  lista.appendChild(nodoLi);
}
