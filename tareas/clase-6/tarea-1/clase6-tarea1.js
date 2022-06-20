/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.

Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#subir-cantidad-integrantes').onclick = function (event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    let cantidadIntegrantes = Number($cantidadIntegrantes.value);
    subirCantidadIntegrantes(cantidadIntegrantes);

    return false;
}

function subirCantidadIntegrantes(cantidadIntegrantes) {

    for(let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante();
    }

}

function crearIntegrante () {
    const $div = document.createElement('div');
    const $divIntegrantesIngresados = document.querySelector('#cantidad-integrantes-ingresados');

    let labelEdadIntegrante = document.createElement('label');
    labelEdadIntegrante.textContent = `Ingresa la edad del integrante familiar `; 
    
    let inputEdadIntegrante = document.createElement('input');
    inputEdadIntegrante.type = 'number';

    $div.appendChild(labelEdadIntegrante);
    $div.appendChild(inputEdadIntegrante);

    $divIntegrantesIngresados.appendChild($div);

}