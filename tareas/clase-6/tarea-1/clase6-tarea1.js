/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.

Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/




ocultarBotones();


document.querySelector('#añadir-cantidad-integrantes').onclick = function(evento) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    let cantidadIntegrantes = Number($cantidadIntegrantes.value);
    resetear();
    añadirIntegrantes(cantidadIntegrantes);
    mostrarBotones();
    evento.preventDefault();
}
        // Se ejecuta al hacer click en el boton "Calcular" o "Limpiar".

        document.querySelector('#boton-calcular').onclick = function(evento) {
            const $arrayEdades = guardarEdadIntegrantes();
            obtenerEdadMayor($arrayEdades);
            obtenerEdadMenor($arrayEdades);
            obtenerEdadPromedio($arrayEdades);

            mostrarEdadMayor();
            mostrarEdadMenor();
            mostrarEdadPromedio();
            evento.preventDefault();
        }
    
        document.querySelector('#boton-limpiar').onclick = function(evento) {
            ocultarEdadMayor();
            ocultarEdadMenor();
            ocultarEdadPromedio();
            ocultarBotones();
            resetear();
            evento.preventDefault();
        }


        //   Crea y luego añade los integrantes creados al index.

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


function guardarEdadIntegrantes() {

    const $edades = document.querySelectorAll('.edades-integrantes input');
    let edades = [];

    for(let i = 0; i < $edades.length; i++) {

        edades.push(Number($edades[i].value));

    }
    return edades;
}


        // La primer funcion oculta los botones "Calcular" y "Limpiar", la segunda los muestra
        // y la tercer funcion borra la cantidad de integrantes ingresados.

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

        //      Estas funciones ocultan los mensajes creados al calular los promedios.

function ocultarEdadMayor() {

    const $olcultarEdadMayor = document.querySelector('#mayor-edad');
    $olcultarEdadMayor.className = 'ocultar';
}

function ocultarEdadMenor() {

    const $olcultarEdadMenor = document.querySelector('#menor-edad');
    $olcultarEdadMenor.className = 'ocultar';
}


function ocultarEdadPromedio() {

    const $olcultarEdadPromedio = document.querySelector('#edad-promedio-familiar');
    $olcultarEdadPromedio.className = 'ocultar';
}

        //      Estas funciones muestran los mensajes creados al calcular los promedio.

function mostrarEdadMayor() {

    const $olcultarEdadMayor = document.querySelector('#mayor-edad');
    $olcultarEdadMayor.className = '';
}

function mostrarEdadMenor() {

    const $olcultarEdadMenor = document.querySelector('#menor-edad');
    $olcultarEdadMenor.className = '';
}


function mostrarEdadPromedio() {

    const $olcultarEdadPromedio = document.querySelector('#edad-promedio-familiar');
    $olcultarEdadPromedio.className = '';
}

        //   Calculos necesarios para los mensajes de edad mayor, menor y promedio del grupo familiar 

function obtenerEdadMayor($arrayEdades) {

    let edadMayor = $arrayEdades[0];
    for(let i = 1; i < $arrayEdades.length; i++) {
        if ($arrayEdades[i] > edadMayor) {
            edadMayor = $arrayEdades[i];
        }
    }
    const $mensajeMayorEdad = document.querySelector('#mayor-edad');
    $mensajeMayorEdad.textContent = `La mayor edad del grupo familiar es ${edadMayor}`;
    return $mensajeMayorEdad;
}

function obtenerEdadMenor($arrayEdades) {

    let edadMenor = $arrayEdades[0];
    for(let i = 0; i < $arrayEdades.length; i++) {
        if ($arrayEdades[i] < edadMenor) {
            edadMenor = $arrayEdades[i];
        }
    }
    const $mensajeMenorEdad = document.querySelector('#menor-edad');
    $mensajeMenorEdad.textContent = `La menor edad del grupo familiar es ${edadMenor}`;
    return $mensajeMenorEdad;
}

function obtenerEdadPromedio($arrayEdades) {

    let edadTotal = 0;
    for(let i = 0; i < $arrayEdades.length; i++) {
        edadTotal = edadTotal + $arrayEdades[i];
    }

    let edadPromedio = Math.floor(edadTotal / $arrayEdades.length);

    const $mensajeEdadPromedio = document.querySelector('#edad-promedio-familiar');
    $mensajeEdadPromedio.textContent = `El promedio de la edad familiar es ${edadPromedio}`;
    return $mensajeEdadPromedio;
}