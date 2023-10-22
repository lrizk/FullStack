//CREAR TRES VARIABLES

let variableA= "valor varA";
let variableB= "valor varB";
let variableC= "valor varC";

//CREAR OBJETO VACIO

let ejercicio6={};

//CREAR PROPIEDADES A ESE OBJETO A PARTIR DE LAS VARIABLES

//objeto - variable - propiedad
ejercicio6.variableA= variableA;
ejercicio6.variableB= variableB;
ejercicio6.variableC= variableC;

//MOSTRAR EN PANTALLA

console.log(ejercicio6);

//ARRAYS
//SIRVEN PARA AGRUPAR ELEMENTOS DEL MISMO TIPO O RELACIONADOS

const numeros=[10, 20, 30, 40, 50];
console.log("mi primer array",numeros)
console.table(numeros);

//SE MUESTRAN EN FORMATO TABLA
//LOS OBJETOS USAN {}
//LOS ARRAYS USAN []

//OTRA FORMA DE USAR ARRAYS
const meses=["enero", "febrero", "marzo", "abril"];
console.table(meses);

//EJERCICIO: CREAR UN ARRAY diaSemana Y MOSTRAR POR PANTALLA

let diaSemana=["lunes","martes","miercoles","jueves","viernes"];
console.table(diaSemana);

//DENTRO DEL ARRAY PODEMOS TENER VALROES DE TODO TIPOS

let mezclaDatos=["hola",10,true,null,[1,2,3]];
console.table(mezclaDatos);

//PARA ACCEDER A LOS VALORES DEL ARRAY
//HACEMOS USO DE LOS INDICES
//EL INDICE EMPIEZA EN 0

console.log("accediendo a los valores del array con indice 2:",numeros[2]);
//ACCEDE AL VALOR CON INDICE 2 DEL ARRAY

//EJERCICIO: MOSTRAR SOLO LUNES Y JUEVES DEL ARRAY diaSemana
console.log("mostrando los valores Lu y Jue con indice:",diaSemana[0,3]);

//EJERCICIO:

//CREAR UN OBJETO CON PROPIEDADES DE TIPO STRING, NUMBER Y BOOLEAN
let ejercicio7={
    texto:"string",
    booleanos:true,
    numero:13,
}


//AÑADIR UNA PROPIEDAD TIPO ARRAY CON LOS DÍAS DEL FIN DE SEMANA, finSemana
ejercicio7.finSemana=["sabado","domingo"];

//CREAR UN DESTRUCTURING CON CADA UNA DE LAS PROPIEDADES
let{texto, booleanos, numero, finSemana}=ejercicio7;
console.log("destructuring de ejer7 con obj y array:",ejercicio7);

//METODOS PARA LOS ARRAY
//CONOCER LA EXTENSION DE UN ARREGLO
//AL IGUAL QUE CON LOS STRING, EN ARRAY USAMOS: LENGTH

console.log("longitud del array:",meses.length);


//ITERADORES DE LOS ARRAY, EL OBEJTIVO ES PODER ACCEDER
//A CADA ELEMENTO DE UN ARRAY

diaSemana.forEach(function(dia){
    console.log(dia);
})
//FOREACH, CADA UNO DE ELLOS. RECORRE LOS ELEMENTOS DE UN ARRAY


//MODIFICAR, ELIMINAR Y AÑADIR ELEMENTOS DE LOS ARRAYS

numeros[5] = 60;
// SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY
// USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO

numeros[2] = 120; // SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR
console.table(numeros);

//METODO PUSH, AÑADE UN ELEMENTO AL FINAL DEL ARRAY
//NO SE NECESITA SABER LA DIMENSION DEL ARREGLO

numeros.push(13); //AÑADE EL NUEVO NUMERO AL FINAL DEL ARRAY
//PUEDE AÑADIR TANTOS COMO QUIERAS USANDO LA COMA ','

//NO ES BUENA PRACTICA MODIFICAR ARRAYS ORIGINALES

numeros.unshift(-10, 126090, -30); //AÑADE ELEMENTOS AL INICIO
console.log(numeros);

//ELIMINAR ELEMENTOS DE UN ARRAY

numeros.pop(); //ME ELIMINA EL ULTIMO DEL ARRAY
console.log(numeros);

numeros.shift(); //ELIMINA EL PRIMER ELEMENTO
console.log(numeros);
console.table(numeros);

//ELIMINAR X ELEMENTOS A PARTIR DEL Y splice(x,y);
numeros.splice(2, 3);
console.log(numeros);
//LA DESVENTAJA ES QUE ESTAMOS MODIFICANDO NUESTRO ARRAY ORIGINAL


//PARA EVITAR ESTO CREAMOS UN ARRAY NUEVO CON REST/SPREAD OPERATOR
let nuevoArreglo=[13.13,...numeros,666];
console.log(nuevoArreglo);

//EJERCICIO:
//CREAR UN ARRAY QUE SE LLAME ESTACIONES, INICIALIZAMOS CON VERANO SOLAMENTE
let estaciones=["verano"];

//AÑADIR PRIMAVERA EN SU LUGAR CORRESPONDIENTE
//IDEM AÑADIR OTOÑO, INVIERNO

estaciones.unshift("primavera");
estaciones.push("otoño","invierno");
console.log(estaciones);


//EJERCICIO

// CREAR UN ARRAY CARRITO
// CON 4 OBJETOS EN SU INTERIOR
// CON PROPIEDADES NOMBRE Y PRECIO
// ASIGNAR VALORES QUE QUERAIS

let carrito=[
    {
        nombre:"fruta",
        precio:5
    },

    {
        nombre:"champu",
        precio:7
    },

    {
        nombre:"pan",
        precio:2
    },

    {
        nombre:"chicle",
        precio:1
    }
];
console.log(carrito);
console.table(carrito);

//METODO INCLUDE PARA ARREGLO PLANO

let resultado;

resultado=meses.includes("mayo");
console.log("uso de includes para buscar en array plano:",resultado);
//NO SE PUEDE USAR PARA ARREGLO DE OBJETOS


//METODO SOME IDEAL PARA ARREGLO DE OBEJTOS
resultado=carrito.some(function(producto){
    return producto.nombre==="chicle"
});

console.log("resultado de funcion some ideal:",resultado);
//ME DEVUELVE TRUE O FALSE

//COMO SABER EL TOTAL DEL CARRITO: REDUCE

resultado=carrito.reduce(function(total=0,producto){ //PARA ITERAR, 'TOTAL PRODCUTO' SON LOS PARAMETROS DE LA FUNCION
    return total+producto.precio
},0); //EL VALOR DONDE INICIA
console.log("uso de reduce",resultado);

//FILTER: PARA FILTRAR
//EL MAS USADO

resultado=carrito.filter(function(x){
    return x.precio<=2
});
console.log("uso de filter", resultado);

// === EXACTAMENTE IGUALES
// == IGUALES PERO NO ESTRICTAMENTE 200="200"
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL
