// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

            /*
            const nombreUsuario = prompt('Cual es tu nombre?');
            const miNombre = 'matias';
            const nombreAmigo = 'julian';
            function compararNombres(nombreUsuario, miNombre, nombreAmigo){
                if(nombreUsuario === miNombre){
                    console.log('Hola, Tocayo! Yo tambien me llamo ' + miNombre)
                }else if (nombreUsuario === nombreAmigo){
                    console.log('Hola ' + nombreUsuario + ' te llamas igual que mi amigo ' + nombreAmigo)
                } else{
                    console.log('Hola ' + nombreUsuario)
                }
            }
            console.log(compararNombres(nombreUsuario, miNombre, nombreAmigo));
            */

    document.querySelector('#botonIngresarNombre').onclick = function() {
        const parrafoNombre = document.querySelector('#pNombre');
        const miNombre = 'matias';
        const nombreMamá = 'mariela';
        const nombreUsuario = document.querySelector('#nombreUsuario').value.toLowerCase();

        if(nombreUsuario === miNombre) {
            let nombreIguales = document.createTextNode(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`);
            parrafoNombre.appendChild(nombreIguales);
        }else if(nombreUsuario === nombreMamá) {
            let nombreIgualMama = document.createTextNode(`Hola ${nombreUsuario}, te llamas igual que mi Mamá. `)
            parrafoNombre.appendChild(nombreIgualMama);
        }else {
            let nombre = document.createTextNode(`Hola, ${nombreUsuario}`)
            parrafoNombre.appendChild(nombre);
        }
    }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

                        /*
                        const edadUsuairo = Number(prompt('Cual es tu edad?'));
                        const miEdad = 22;
                        function compararEdades(edadUsuairo, miEdad){
                            if(edadUsuairo === miEdad){
                                console.log('Tenemos la misma edad!')
                            }else if(edadUsuairo < miEdad) {
                                console.log('Tu edad es menor que la mia!')
                            }else if(edadUsuairo > miEdad){
                                console.log('Tu edad es mayor que la mia!')
                            }
                        }
                        console.log(compararEdades())
                        */
    document.querySelector('#botonIngEdad').onclick = function() {
        const parrafoEdad = document.querySelector('#pEdad');
        const edadUsuario = Number(document.querySelector('#edadUsuario').value);
        const miEdad = 22;

        if(edadUsuario === miEdad) {
          let edadesIguales = document.createTextNode(`Tu edad es igual a la mía`);
          parrafoEdad.appendChild(edadesIguales); 
        }else if(edadUsuario < miEdad) {
            let edadMenor = document.createTextNode(`Tu edad es menor a la mía`);
            parrafoEdad.appendChild(edadMenor);
        }else if (edadUsuario > miEdad) {
            let edadMayor = document.createTextNode(`Tu edad es mayor que la mía`);
            parrafoEdad.appendChild(edadMayor);
        }

    }



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

                    /*
                    const EDAD_PARA_PASAR = 18;
                    const pedirDoc = prompt('Tenes documento? Contesta "si" o "no"').toLowerCase();
                    if(pedirDoc === 'si'){
                        let pedirEdad = prompt('Me decis tu edad?')
                            if(pedirEdad >= EDAD_PARA_PASAR){
                                console.log('Bienvenido al bar, podes pasar.')
                            }else if(pedirEdad < EDAD_PARA_PASAR){
                                console.log('No podes pasar siendo menor de edad')
                            }
                    }else if(pedirDoc === 'no'){
                        console.log('No podes pasar')
                    }else{
                        console.log('Spanish motherfucker, do you speak it?')
                    }
                    */

    let pEdadEntradaBar = document.querySelector('#pEdadEntradaBar');
    document.querySelector('#siTiene').onclick = function() {
        const div = document.querySelector('#divEdad');                
        
        let input = document.createElement('input');
        input.id = "edadUsuario";
        input.setAttribute("type", "number")
        
        let label = document.createElement('label');
        label.setAttribute("for", "edadUsuario");
        label.innerHTML = "Me decis tu edad?";

        let button = document.createElement('button');
        button.setAttribute("for", "edadUsuario");
        button.innerHTML = "Ingresar edad";

        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(button);

        button.onclick = function(){
            if(input.value < 18){
                let menorDeEdad = document.createTextNode(`No podes pasar si sos menor de 18 años.`);
                pEdadEntradaBar.appendChild(menorDeEdad);
            }else if(input.value >= 18) {
                let mayorDeEdad = document.createTextNode(`Podes pasar`);
                pEdadEntradaBar.appendChild(mayorDeEdad);
            }
        }
    }

    document.querySelector('#noTiene').onclick = function() {
        let noTieneDoc = document.createTextNode(`No podes pasar si no tenes documento, pibe`);
        pEdadEntradaBar.appendChild(noTieneDoc);
    }