// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*for (let i=3;i<=22;i+=3){
    console.log(i)
}
*/
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
let p = document.querySelector('#parrafo');
let body = document.querySelector('#body');
let text;
function tarea2 () {

    let num = 10;
    while (num >= 1){
        text = document.createTextNode(Number(num));
        p.appendChild(text);
        body.appendChild(p);
        num--;
    }

}
tarea2();
                            /*
                            function tarea2 (){
                                let num = 11;
                                while (num > 1){
                                    num--;
                                    console.log(num);
                                }
                            }
                            tarea2();
                            /*




// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
                        
                        /*
                        function fizzBuzz(){
                            for(let i = 1; i <= 50; i++){
                                if (i % 3 === 0 && i % 5 === 0){
                                    console.log('FizzBuzz');
                                }else if(i % 3 === 0){
                                    console.log('Fizz');
                                }else if(i % 5 === 0){
                                    console.log('Buzz');
                                }else{
                                    console.log(i);
                                }
                            }
                        }
                        fizzBuzz();
                        */
let div = document.querySelector('#FizzBuzz');
let parrafo = document.createElement('p');
div.appendChild(parrafo);
function fizzBuzz () {
    for (let i = 0; i <= 50; i++){
        if (i % 5 === 0 && i % 3 === 0) {
            let fBuzz = document.createTextNode('FizzBuzz \n');
            parrafo.appendChild(fBuzz);
        }else if (i % 5 === 0) {
            let buzz = document.createTextNode('buzz \n');
            parrafo.appendChild(buzz);
        }else if (i % 3 === 0) {
            let fizz = document.createTextNode('fizz \n');
            parrafo.appendChild(fizz);
        }else {
            let num = document.createTextNode(`${i} \n`);
            parrafo.appendChild(num);
        }

    }
}
fizzBuzz();
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


                /*function calcularPromedio(){
                    const numeros = [10,5,4,2,8];
                    let totalNumeros = 0;
                    for(let i = 0; i < numeros.length; i++){
                        console.log(totalNumeros = totalNumeros + numeros[i]);
                    }
                    console.log(totalNumeros / numeros.length)
                }
                calcularPromedio();
                */