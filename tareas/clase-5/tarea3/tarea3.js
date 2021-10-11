document.querySelector('#botonSumar').onclick = function(){
  const horas = document.querySelector('#horas').value;
  const minutos = document.querySelector('#minutos').value;
  const segundos = document.querySelector('#segundos').value;

  if(segundos === 60){
    minutos++;
  }
  if(minutos === 60){
    horas++;
  }

  let duracionTotal = horas + minutos + segundos;
  let sumaDuracion = duracionTotal + horas + minutos + segundos;

  const nodoStrong = document.querySelector('#duracionTotal')
  nodoStrong.appendChild(sumaDuracion)
}
