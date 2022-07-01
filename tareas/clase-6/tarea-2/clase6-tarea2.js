/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
    para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
    menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

ocultarBotonCalcular();
document.querySelector('#agregar').onclick = function(event) {

    crearInput();

    const $cantidadInputs = document.querySelectorAll('.contenedor-inputs')

    if($cantidadInputs.length > 0 && $cantidadInputs.length < 2) {

        mostrarBotonCalcular();
    }

    event.preventDefault();
}

document.querySelector('#sacar').onclick = function(event) {

    sacarInputs();
    ocultarBotonCalcular();
    borrarMensajes();
    event.preventDefault();
}


            //  La primer funcion crea los inputs cuando la llaman. 
            
            //  La segunda borra los inputs y el boton para calcular.

function crearInput() {

    const $div = document.createElement('div');
    $div.className = 'contenedor-inputs';
    
    const $input = document.createElement('input');
    $input.id = 'salario-anual';
    $input.type = 'number';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese el salario anual del integrante familiar: `;

    $div.appendChild($label);
    $div.appendChild($input);

    const $listaSalarios = document.querySelector('#lista-salarios');
    $listaSalarios.appendChild($div);
}

function sacarInputs() {

    const $contenedorInputs = document.querySelectorAll('.contenedor-inputs');
    for(let i = 0; i < $contenedorInputs.length; i++) {
        $contenedorInputs[i].remove();
    }
}

            //   La primer funcion muestra el boton para calcular cuando la llaman.
            
            //   La segunda lo oculta cuando la llaman.

            //   La tercera borra los mensajes que se crean al hacer click en "Calcular".


            //   La siguiente se ejecuta cuando se hace click en el boton "Calcular".

document.querySelector('#calcular').onclick = function(event)  {

    let arraySalarios = obtenerSalarios();
    calcularMayorSalarioAnual(arraySalarios);
    calcularMenorSalarioAnual(arraySalarios);
    calcularSalarioPromedio(arraySalarios);
    event.preventDefault();
}

function mostrarBotonCalcular() {

    const $mostrarBotonCalcular = document.querySelector('#calcular');
    $mostrarBotonCalcular.className = '';
}


function ocultarBotonCalcular() {

    const $ocultarBotonCalcular = document.querySelector('#calcular');
    $ocultarBotonCalcular.className = 'ocultar';

}

function borrarMensajes() {

    const $mensajeMayor = document.querySelector('#mayor-salario');
    $mensajeMayor.textContent = ``;

    const $mensajeMenor = document.querySelector('#menor-salario');
    $mensajeMenor.textContent = ``;

    const $mensajePromedioAnual = document.querySelector('#salario-anual-promedio');
    $mensajePromedioAnual.textContent = ``;

    const $mensajePromedioMensual = document.querySelector('#salario-mensual-promedio');
    $mensajePromedioMensual.textContent = ``;

}


        //   Esta funcion guarda los salarios en un array 
        //   para usarlos y obtener los salarios, mayores, menores y promedios.

function obtenerSalarios() {

    const $cantidadSalarios = document.querySelectorAll('#salario-anual');

    let salarios = [];
    for(let i = 0; i < $cantidadSalarios.length; i++) {

        // Punto Bonus : Solo se pasan los valores que sean mayores que 0.

        if($cantidadSalarios[i].value > 0) {
        salarios.push($cantidadSalarios[i].value);
        }

    }
    return salarios;
}


        //   Las siguientes funciones obtienen los valores necesarios para los mensajes de
        //   salario mayor, menor, promedio anual y mensual.

function calcularMayorSalarioAnual(arraySalarios) {

    let salarioMayor = arraySalarios[0];

    for(let i = 0; i < arraySalarios.length; i++) {

        if(arraySalarios[i] > salarioMayor) {

            salarioMayor = arraySalarios[i];
        }
    }
    mensajeMayorSalarioAnual(salarioMayor);
}
function mensajeMayorSalarioAnual(salarioMayor) {

    const $mensajeMayorSalarioAnual = document.querySelector('#mayor-salario');
    $mensajeMayorSalarioAnual.textContent = `El mayor salario anual es $${salarioMayor}`;
}


function calcularMenorSalarioAnual(arraySalarios) {

    let salarioMenor = arraySalarios[0];

    for(let i = 0; i < arraySalarios.length; i++) {

        if(arraySalarios[i] < salarioMenor) {

            salarioMenor = arraySalarios[i];

        }

    }
    mensajeMenorSalarioAnual(salarioMenor);

}
function mensajeMenorSalarioAnual(salarioMenor) {

    const $mensajeMayorSalarioAnual = document.querySelector('#menor-salario');
    $mensajeMayorSalarioAnual.textContent = `El menor salario anual es $${salarioMenor}`;
}


function calcularSalarioPromedio(arraySalarios) {

    let salarioSumados = 0;

    for(let i = 0; i < arraySalarios.length; i++) {

        salarioSumados = Number(salarioSumados) + Number(arraySalarios[i]);

    }

    mensajeSalarioPromedioAnual(salarioSumados);
    
    mensajeSalarioPromedioMensual(salarioSumados);
    
}

function mensajeSalarioPromedioAnual(salarioSumados) {

    const $mensajeSalarioPromedioAnual = document.querySelector('#salario-anual-promedio');
    $mensajeSalarioPromedioAnual.textContent = `El salario anual promedio del grupo familiar es $${salarioSumados}`;
}

function mensajeSalarioPromedioMensual(salarioSumados) {

    let salarioPromedioMensual = Math.floor(salarioSumados / 12);
    const $mensajeSalarioPromedioMensual = document.querySelector('#salario-mensual-promedio');
    $mensajeSalarioPromedioMensual.textContent = `El salario mensual promedio del grupo familiar es $${salarioPromedioMensual}`;
}