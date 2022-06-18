//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let listaNumeros = document.querySelector('#lista-ordenada');
let cantidadNumeros = [];

document.querySelector('#btn-subir').onclick = function() {
    let nodoLi = document.createElement('li');
    let inputNumero = Number(document.querySelector('#input-numero').value);
    let numeroAgregado = document.createTextNode(`${inputNumero}`);
    
    nodoLi.appendChild(numeroAgregado);
    listaNumeros.appendChild(nodoLi);

    cantidadNumeros.push(inputNumero);

    obtenerPromedio();

    obtenerNumeroMinimo();

    obtenerNumeroMaximo();

    obtenerNumeroMasFrecuente();

    return false;
}


function obtenerPromedio(){

    let mensajeDelPromedio = document.querySelector('#promedio');
    let totalNumeros = 0;
    for (let i = 0; i < cantidadNumeros.length; i++){
        totalNumeros = totalNumeros + cantidadNumeros[i];
    }
    let promedioTotal = totalNumeros / cantidadNumeros.length;
    mensajeDelPromedio.textContent = `El promedio del array es: ${promedioTotal}`;

}

function obtenerNumeroMinimo() {
    
    let mensajeNumeroMinimo = document.querySelector('#numero-minimo');
    let cantidadMinima = Math.min(...cantidadNumeros);
    mensajeNumeroMinimo.textContent = `El numero minimo es: ${cantidadMinima}`;

}

function obtenerNumeroMaximo() {
    
    let mensajeNumeroMaximo = document.querySelector('#numero-maximo');
    let cantidadMaxima = Math.max(...cantidadNumeros);
    mensajeNumeroMaximo.textContent = `El numero maximo es: ${cantidadMaxima}`;

}

function obtenerNumeroMasFrecuente() {

    let mensajeNumeroFrecuente = document.querySelector('#frecuente');
    let cantidadOrdenada = [...cantidadNumeros].sort();
    let numerosDuplicados = [];
    for (let i = 0; i < cantidadOrdenada.length; i++){
        if (cantidadOrdenada[i + 1] === cantidadOrdenada[i]){
            numerosDuplicados.push(cantidadOrdenada[i]);
            mensajeNumeroFrecuente.textContent = `Los numeros mas frecuentes son ${numerosDuplicados}`;
        }
    }

}