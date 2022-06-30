/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
    para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
    menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#agregar').onclick = function() {

    crearInput();

    const $cantidadInputs = document.querySelectorAll('.caja-input')

    if($cantidadInputs.length > 0 && $cantidadInputs.length < 2) {

        crearBotonCalcular();
    }

    return false;
}

document.querySelector('#sacar').onclick = function() {

    sacarInputs();
    
    return false;
}


            //  La primer funcion crea los inputs cuando la llaman. 
            
            //  La segunda borra los inputs y el boton para calcular.

function crearInput() {

    const $div = document.createElement('div');
    $div.className = 'caja-input';
    
    const $input = document.createElement('input');
    $input.id = 'salario-anual';
    $input.type = 'number';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese el salario anual del integrante familiar: `;

    $div.appendChild($label);
    $div.appendChild($input);

    const $cantidadSalarios = document.querySelector('#cantidad-salarios');
    $cantidadSalarios.appendChild($div);
}

function sacarInputs() {

    const $cajaInput = document.querySelectorAll('.caja-input');
    for(let i = 0; i < $cajaInput.length; i++) {
        $cajaInput[i].remove();
    }

    borrarBotonCalcular();
    
    borrarMensajes();
}

            //   La primer funcion crea el boton para calcular cuando la llaman.
            
            //   La segunda lo borra cuando la llaman.

            //   La tercera borra los mensajes que se crean al hacer click en "Calcular".

function crearBotonCalcular() {

    const $boton = document.createElement('button');
    $boton.id = 'calcular';
    $boton.type = 'submit';
    $boton.textContent = 'Calcular';

    const $botonCalcular = document.querySelector('#boton-calcular');
    $botonCalcular.appendChild($boton);


            //   Se ejecuta cuando se hace click en el boton 

    document.querySelector('#calcular').onclick = function()  {

        obtenerSalarios();
        obtenerMayorSalarioAnual();
        obtenerMenorSalarioAnual();
        obtenerSalarioPromedio();
        return false;
    }
}

function borrarBotonCalcular() {

    const $borrarBotonCalcular = document.querySelector('#calcular');
    $borrarBotonCalcular.remove();

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

let salariosGuardados;
function obtenerSalarios() {

    const $cantidadSalarios = document.querySelectorAll('.caja-input input');

    let salarios = [];
    for(let i = 0; i < $cantidadSalarios.length; i++) {

        // Punto Bonus : Solo se pasan los valores que sean mayores que 0.

        if($cantidadSalarios[i].value > 0) {
        salarios.push($cantidadSalarios[i].value);
        }

    }
    return salariosGuardados = salarios;
}


        //   Las siguientes funciones obtienen los valores necesarios para los mensajes de
        //   salario mayor, menor, promedio anual y mensual.

function obtenerMayorSalarioAnual() {

    let salarioMayor = salariosGuardados[0];

    for(let i = 0; i < salariosGuardados.length; i++) {

        if(salariosGuardados[i] > salarioMayor) {

            salarioMayor = salariosGuardados[i];
        }
    }
    const $mensajeMayorSalarioAnual = document.querySelector('#mayor-salario');
    $mensajeMayorSalarioAnual.textContent = `El mayor salario anual es $${salarioMayor}`;
    return $mensajeMayorSalarioAnual;

}

function obtenerMenorSalarioAnual() {

    let salarioMenor = salariosGuardados[0];

    for(let i = 0; i < salariosGuardados.length; i++) {

        if(salariosGuardados[i] < salarioMenor) {

            salarioMenor = salariosGuardados[i];

        }

    }
    const $mensajeMenorSalarioAnual = document.querySelector('#menor-salario');
    $mensajeMenorSalarioAnual.textContent = `El menor salario anual es $${salarioMenor}`;
    return $mensajeMenorSalarioAnual;

}

function obtenerSalarioPromedio() {

    let salarioSumados = 0;

    for(let i = 0; i < salariosGuardados.length; i++) {

        salarioSumados = Number(salarioSumados) + Number(salariosGuardados[i]);

    }
    const $mensajeSalarioPromedioAnual = document.querySelector('#salario-anual-promedio');
    $mensajeSalarioPromedioAnual.textContent = `El salario anual promedio del grupo familiar es $${salarioSumados}`;
    
    
    let salarioPromedioMensual = Math.floor(salarioSumados / 12);
    const $mensajeSalarioPromedioMensual = document.querySelector('#salario-mensual-promedio');
    $mensajeSalarioPromedioMensual.textContent = `El salario mensual promedio del grupo familiar es $${salarioPromedioMensual}`;
    
}