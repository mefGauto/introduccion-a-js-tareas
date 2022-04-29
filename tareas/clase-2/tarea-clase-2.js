// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

                        /*
                        function sumar(numero1, numero2) {
                            return numero1 + numero2;
                        }

                        function restar(numero1, numero2) {
                            return numero1 - numero2;
                        }

                        const operador = prompt('Ingrese + o -');
                        const numero1 = 1;
                        const numero2 = 2;

                        let resultado;
                        if (operador === '+') {
                            resultado = sumar(numero1, numero2);
                        } else {
                            resultado = restar(numero1, numero2);
                        }

                        //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
                        console.log(
                            `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
                        );
                        */
    let body = document.querySelector('body');
    
    let parrafo = document.createElement('p');

    document.querySelector('#sumar').onclick = function() {
        let numero1 = Number(document.querySelector('#numero1').value);
        let numero2 = Number(document.querySelector('#numero2').value);
        let suma = numero1 + numero2;
        let resultado = document.createTextNode(`El resultado de la suma de los numeros, ${numero1} y ${numero2}, es ${suma}`);
        parrafo.appendChild(resultado);
        body.appendChild(parrafo);
    }

    document.querySelector('#restar').onclick = function() {
        let numero1 = Number(document.querySelector('#numero1').value);
        let numero2 = Number(document.querySelector('#numero2').value);
        let resta = numero1 - numero2;
        let resultado = document.createTextNode(`El resultado de la resta de los numeros, ${numero1} y ${numero2}, el ${resta}`);
        parrafo.appendChild(resultado);
        body.appendChild(parrafo);
    }