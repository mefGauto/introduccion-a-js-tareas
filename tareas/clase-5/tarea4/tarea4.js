//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
let ol = document.querySelector('#listaOrdenada');
let numArray = [];
document.querySelector('#btnSubir').onclick = function() {
    let nodoLi = document.createElement('li');
    let inputNum = Number(document.querySelector('#inputNum').value);
    let num = document.createTextNode(`${inputNum}`);
    nodoLi.appendChild(num);
    ol.appendChild(nodoLi);

    numArray.push(inputNum);

    let emPromedio = document.querySelector('#promedio');
    let totalNumeros = 0;
    for (let i = 0; i < numArray.length; i++){
        totalNumeros = totalNumeros + numArray[i];
    }
    let numPromedio = totalNumeros / numArray.length;
    emPromedio.textContent = `El promedio del array es: ${numPromedio}`;

    let emMin = document.querySelector('#numMin');
    let numMin = Math.min(...numArray);
    emMin.textContent = `El numero minimo es: ${numMin}`;

    let emMax = document.querySelector('#numMax');
    let numMax = Math.max(...numArray);
    emMax.textContent = `El numero maximo es: ${numMax}`;

    let emFrecuente = document.querySelector('#frecuente');
    let numFrecuente = [...numArray].sort();
    let numDuplicados = [];
    for (let i = 0; i < numFrecuente.length; i++){
        if (numFrecuente[i + 1] === numFrecuente[i]){
            numDuplicados.push(numFrecuente[i]);
            emFrecuente.textContent = `Los numeros mas frecuentes son ${numDuplicados}`;
        }
    }

    return false;
}

