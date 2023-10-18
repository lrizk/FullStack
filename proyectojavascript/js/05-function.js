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

// EJERCICIO





// EJERCICIO

let descuento=0.2;
let totalAhorro=0;

function calcularDescuento(z){
    totalAhorro+=(z*descuento)
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);

console.log(`el descuento total es de ${totalAhorro}`)


// METODOS DE PROPIEDAD
// LO QUE VA ENTRE PARENTESIS DESPUES DE FUNCTION ES UN ARGUMENTO RELATIVO A LA FUNCION QUE CREAS

let reproductor={
    reproducir:function(nc){  
        console.log(`Reproduciendo cancion con ID:${nc}`)
    },

    pausar:function(){
        console.log("pausando cancion...")
    },

    crearPlaylist:function(nombre){
        console.log(`Creando playlist: ${nombre}`)
    }

}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("Metal");

reproductor.borrarCancion=function(id){
    console.log(`Borrando cancion con ID: ${id}`)
}

reproductor.borrarCancion(450);

// UN OBJETO ES UN CONTENEDOR DE PROPIEDADES

// CUANDO SE LLAMA  A LA FUNCION ES QUE SE ASIGNAN LOS VALORES DE ESTA 
// EJEM: 
// function nombreCompleto(nombre,ap1,ap2){

// }
// nombreCompleto("Federico,Garcia,Lorca")

let triplicar=function(x){
    return 3*x;
}

console.log(triplicar(6));


// FUNCIONES DE FLECHA




//ARROW FUNCTION
    //PASOS
    /*
        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HAY QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO
    */

            // let triplicarFlecha = (numero=1) => numero*numero*numero;

            // let valorTriplicado2 = triplicarFlecha(12);
            // console.log(valorTriplicado2) 

// SI SOLO HAY UNA LINEA DE CODIGO LA QUITAMOS


let flecha1= numero => numero + 7;

let resultado=flecha1(3);

console.log(`resultado de arrow function es: ${resultado}`);

let carrito=[
{
    nombre: "TV",
    precio: 750
},

{
    nombre: "tablet",
    precio:350
},

{
    nombre:"movil",
    precio:550
},

{
    nombre:"pc",
    precio: 1750
}

];

// SOME IDEAL PARA ARREGLO DE OBJETOS, ME BUSCA ESE VALOR DENTRO DEL ARRAY

let resultado1;

resultado1=carrito.some(function (producto) {
    return producto.nombre === "tablet"
});

console.log(`resultado de funcion some ideal: ${resultado1}`);

// CON ARROW FUNCTION

resultado1 =carrito.some(producto=>producto.nombre==="tablet");
console.log(`resultado de funcion some ideal con funcion flecha: ${resultado1}`);

// COMO SABER EL TOTAL DEL CARRITO

resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO: PARAMETROS DE LA FUNCION
    return total + producto.precio
},0); //SUMA UN VALOR AL RESULTADO SIMPLEMENTE
console.log("USO DE REDUCE", resultado);

//PONER CON ARROW FUNCTION

resultado = carrito.reduce((total, producto)=> total + producto.precio, 0); // EL VALOR DEL INDICE DONDE INICIA
console.log("USO DE REDUCE CON ARROW FUNCTION", resultado);

// EJERCICIO

function sumaDeclaracion(n1,n2,n3){
    console.log(n1+n2+n3);
}

sumaDeclaracion(3,5,8);

let sumaExpresion=function(n1,n2,n3){
    console.log(n1+n2+n3);
}

sumaExpresion(4,8,29);

let sumaFlecha1=(n1,n2,n3)=>console.log(n1+n2+n3);

sumaFlecha1(5,7,9);


// EJERCICIO ARRAY + ARROW

let numero=[23,87,43]

function buscarDeclaracion(x){
    console.log(numero.includes(x));
}

buscarDeclaracion(87);

let buscarExpresion=function(x){
    console.log(numero.includes(x));
}
buscarExpresion(56);

// CON ARROW

let buscarFlecha= x =>console.log(numero.includes(x));

buscarFlecha(23);


// EJERCICIO ARROW

let sumandos=(n1,n2)=>console.log((n1+n2)*10);

sumandos(4,8);

let caracteres=(x,y)=>console.log(x.length+y.length);

caracteres("estampa","diario");

// EJERCICIO ARRAY CON ARROW

let arrayArrow=[1,2,3,4,5]


let eliminarUltimo=(x)=>x.pop();

eliminarUltimo(arrayArrow)

console.log(arrayArrow);
