const $form = document.querySelector('#formulario-edad-integrantes');

function manejarErrores () {

    const $errorCantidadIntegrantes = document.querySelector('#error-cantidad-integrantes');
    $errorCantidadIntegrantes.textContent = validarCantidadIntegrantes();
}

function validarCantidadIntegrantes () {

    let cantidadIntegrantes = $form['cantidad-integrantes'].value;
    if (cantidadIntegrantes <= 0) {

        return 'Debes elegir un numero de integrantes para continuar'
    }
    if (cantidadIntegrantes  > 0) {

        return '';
    }
    if (!/^[0-9]$/.test(cantidadIntegrantes)) {

        return 'El numero de integrantes debe ser entero'
    }
}
console.log( validarCantidadIntegrantes() )
