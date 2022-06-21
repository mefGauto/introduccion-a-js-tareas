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

function crearInput() {

    const $div = document.createElement('div');
    $div.className = 'caja-input';
    
    const $input = document.createElement('input');
    $input.id = 'salario-anual';
    $input.type = 'number';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese el salario anual del integrante familiar`;

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

}


function crearBotonCalcular() {

    const $boton = document.createElement('button');
    $boton.id = 'calcular';
    $boton.type = 'submit';
    $boton.textContent = 'Calcular';

    const $botonCalcular = document.querySelector('#boton-calcular');
    $botonCalcular.appendChild($boton);

}
function borrarBotonCalcular() {

    const $borrarBotonCalcular = document.querySelector('#calcular');
    $borrarBotonCalcular.remove();

}