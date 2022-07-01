/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.

Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/
ocultarBotones();
document.querySelector('#añadir-cantidad-integrantes').onclick = function () {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    let cantidadIntegrantes = Number($cantidadIntegrantes.value);
    resetear();
    añadirIntegrantes(cantidadIntegrantes);
    mostrarBotones();
    return false;
}


        //   Sube, crea y guarda la cantidad de integrantes que elije el usuario

function añadirIntegrantes(cantidadIntegrantes) {


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


        // Se ejecuta al hacer click en el boton "Calcular" o "Limpiar".

    document.querySelector('#boton-calcular').onclick = function() {
        guardarEdadIntegrantes();
        obtenerEdadMayor();
        obtenerEdadMenor();
        obtenerEdadPromedio();
        return false;
    }

    document.querySelector('#boton-limpiar').onclick = function() {
        obtenerEdadMayor().remove();
        obtenerEdadMenor().remove();
        obtenerEdadPromedio().remove();
        resetear();
        return false;
    }

function ocultarBotones() {
    const $ocultarBotonCalcular = document.querySelector('#boton-calcular');
    $ocultarBotonCalcular.className = 'ocultar';

    const $ocultarBotonLimpiar = document.querySelector('#boton-limpiar');
    $ocultarBotonLimpiar.className = 'ocultar';
}

function mostrarBotones() {
    const $mostrarBotonCalcular = document.querySelector('#boton-calcular');
    $mostrarBotonCalcular.className = '';

    const $mostrarBotonLimpiar = document.querySelector('#boton-limpiar');
    $mostrarBotonLimpiar.className = '';
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