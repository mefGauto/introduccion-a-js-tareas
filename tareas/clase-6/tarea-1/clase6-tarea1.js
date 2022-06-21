/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.

Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#subir-cantidad-integrantes').onclick = function () {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    let cantidadIntegrantes = Number($cantidadIntegrantes.value);
    resetear();
    subirCantidadIntegrantes(cantidadIntegrantes);

    return false;
}


        //   Sube, crea y guarda la cantidad de integrantes que elije el usuario

function subirCantidadIntegrantes(cantidadIntegrantes) {

    if(cantidadIntegrantes > 0) {
        crearBotonCalcular();
        crearBotonResetear();
    }

    for(let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante();
    }

}

function crearIntegrante () {
    const $div = document.createElement('div');
    $div.className = 'edades-integrantes';
    const $divIntegrantesIngresados = document.querySelector('#cantidad-integrantes-ingresados');

    let labelEdadIntegrante = document.createElement('label');
    labelEdadIntegrante.textContent = `Ingresa la edad del integrante familiar `; 
    
    let inputEdadIntegrante = document.createElement('input');
    inputEdadIntegrante.type = 'number';

    $div.appendChild(labelEdadIntegrante);
    $div.appendChild(inputEdadIntegrante);

    $divIntegrantesIngresados.appendChild($div);

}

let edadesGuardadas;
function guardarEdadIntegrantes() {

    const $edades = document.querySelectorAll('.edades-integrantes input');
    let edades = [];

    for(let i = 0; i < $edades.length; i++) {

        edades.push(Number($edades[i].value));

    }
    return edadesGuardadas = edades;
}


            //  Crea los botones, una funcion para borrarlos y 
            //  borra los inputs añadidos por el usuario

function crearBotonCalcular() {

        // Crea el boton
        
    const $botonCalcular = document.createElement('button');
    $botonCalcular.id = 'calcular'
    $botonCalcular.type = 'submit';
    $botonCalcular.textContent = `Calcular`;

    const $div = document.querySelector('#calculos');
    $div.appendChild($botonCalcular);


        // Se ejecuta al hacer click en el boton

    document.querySelector('#calcular').onclick = function() {
        guardarEdadIntegrantes();
        obtenerEdadMayor();
        obtenerEdadMenor();
        obtenerEdadPromedio();
        return false;
    }
}

function crearBotonResetear() {

            //  Crea el boton
    const $botonResetear = document.createElement('button');
    $botonResetear.id = 'resetear';
    $botonResetear.type = 'reset';
    $botonResetear.textContent = 'Limpiar';

    const $div = document.querySelector('#calculos');
    $div.appendChild($botonResetear);

        // Se ejecura al hacer click en el boton
    document.querySelector('#resetear').onclick = function() {
        resetear();
        obtenerEdadMayor().remove();
        obtenerEdadMenor().remove();
        obtenerEdadPromedio().remove();
        borrarBotones();

    }
}

function borrarBotones() {

    const $borrarCalcular = document.querySelector('#calcular')
    $borrarCalcular.remove();

    const $borrarResetear = document.querySelector('#resetear');
    $borrarResetear.remove();
}



function resetear() {

    let cantidadIntegrantes = document.querySelectorAll('.edades-integrantes');
    for(let i = 0; i < cantidadIntegrantes.length; i++) {

        cantidadIntegrantes[i].remove();

    }
}


        //   Calculos necesarios para los mensajes de edad mayor, menor y promedio del grupo familiar 

function obtenerEdadMayor() {

    let edadMayor = edadesGuardadas[0];
    for(let i = 1; i < edadesGuardadas.length; i++) {
        if (edadesGuardadas[i] > edadMayor) {
            edadMayor = edadesGuardadas[i]
        }
    }
    const $mensajeMayorEdad = document.querySelector('#mayor-edad');
    $mensajeMayorEdad.textContent = `La mayor edad del grupo familiar es ${edadMayor}`;
    return $mensajeMayorEdad;
}

function obtenerEdadMenor() {

    let edadMenor = edadesGuardadas[0];
    for(let i = 0; i < edadesGuardadas.length; i++) {
        if (edadesGuardadas[i] < edadMenor) {
            edadMenor = edadesGuardadas[i]
        }
    }
    const $mensajeMenorEdad = document.querySelector('#menor-edad');
    $mensajeMenorEdad.textContent = `La menor edad del grupo familiar es ${edadMenor}`;
    return $mensajeMenorEdad;
}

function obtenerEdadPromedio() {

    let edadTotal = 0;
    for(let i = 0; i < edadesGuardadas.length; i++) {
        edadTotal = edadTotal + edadesGuardadas[i];
    }

    let edadPromedio = Math.floor(edadTotal / edadesGuardadas.length);

    const $mensajeEdadPromedio = document.querySelector('#edad-promedio-familiar');
    $mensajeEdadPromedio.textContent = `El promedio de la edad familiar es ${edadPromedio}`;
    return $mensajeEdadPromedio;
}