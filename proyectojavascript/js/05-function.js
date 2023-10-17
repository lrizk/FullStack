// TRES FORMAS DE CREAR UNA FUNCION
// DECLARACION DE LA FUNCION
sumar(10, 20);

function sumar(n1, n2) {
    console.log(n1 + n2);
}
// CREACION Y ESTRUCTURa DE UNA FUNCION


// LLAMAR A LA FUNCION


// EXPRESION DE LA FUNCION

let sumar2 = function (n3, n4) {
    console.log(n3 + n4);
}

sumar2(3, 9);


    // IIFE

    (function () {
        console.log("funcion IIFE")
    })();


    // DIFERNCIA ENTRE METODO Y FUNCION

let numero1=20;
let numero2="20";

console.log(parseInt(numero2));
console.log(numero1.toString());

// console.log(typeof(parseInt(numero2)));
// console.log(typeof(numero1.toString()));


// CREAR UNA FUNCION QUE RECIBA COMO ARGUMENTO COLOR 

function color(color){
    console.log(`el color elegido es ${color}`);
}

color("rosa");

// CREAR UNA FUNCION QUE RECIBA COMO ARGUMENTOS IMPORTE, DESCUENTO
// Y MUESTRE POR PANTALLA EL DESCUENTO TOTAL 
// Y EL PRECIO FINAL

// function precioAhorro(importe,descuento){
//     console.log(importe-descuento);
//     console.(descuento-importe);
// }

// precioAhorro(80,15);


// CREAR UNA FUNCION QUE CUENTE LOS CARACTERES DE UN TWEET
// ARGUMENTO DE ENTRADA, EL TEXTO DEL TWEET

function tweet(z){
    console.log(z.length);
}


tweet("este es mi texto");

// CREAR UNA FUNCIÓN QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI
// LA PALABRA ESTA CONTENIDA EN EL TEXTO

function buscar(texto,palabra){
    console.log(`palabra buscada: ${texto.includes(palabra)}`);
}

buscar("el murcielago come ciruelas","ciruelas");


// EJERCICIO ARRAY


let frutas=["fresa","mango"];

function añadirFruta(nuevafruta){
    frutas.push(nuevafruta);
}

añadirFruta("fresa");
console.log(frutas);

// EJERCICIO
// CREAR UNA FUNCION QUE ME RESTE DOS VALORES DADOS


function restar(n1,n2){
    console.log(n1-n2);

}

restar(45,23);