let strong = document.querySelector('#duracionTotal');
let lista = document.querySelector('#listaVideos');
let video;
let tiempoSumado;

document.querySelector('#botonSumar').onclick = function(){
  let horas = document.querySelector('#horas').value;
  let minutos = document.querySelector('#minutos').value;
  let segundos = document.querySelector('#segundos').value;
  
  let horasGuardadas = 0;
  let minutosGuardados = 0;
  let segundosGuardados = 0;

  let nodoLi = document.createElement('li');
  video = document.createTextNode( `Tu video dura: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
  nodoLi.appendChild(video);
  lista.appendChild(nodoLi);

  function sumarTiempo(){
    let horasSumadas = horasGuardadas +++ horas;
    let minutosSumados = minutosGuardados +++ minutos;
    let segundosSumados = segundosGuardados +++ segundos;

    let parrafo = document.createElement('p');
    tiempoSumado = document.createTextNode(`El tiempo total es: ${horasSumadas} horas, ${minutosSumados} minutos, ${segundosSumados} segundos.`);
    parrafo.appendChild(tiempoSumado);
    strong.appendChild(parrafo);
  }

  sumarTiempo();
}
