"use strict"

let producto = {
     nombreProducto: "laptop",
     precio: 45,
     disponible: true
}

console.log("mi primer producto:",producto)

// ESTRUCTURA DE UN OBJETO

//     let/var/const NombreDelObjeto = {
//         propiedad o llave del objeto : valor,
//         mas propiedades : valor,
//         .
//         .
//         .
//     }

console.log(`uso de sintaxis producto template string: ${producto.precio}`);

// MODIFICAR OBJETOS

//     UNA CARACTERISTICAS QUE TIENEN LOS OBJETOS ES QUE PODEMOS A
//     AGREGAR, QUITAR Y MODIFICAR INFORMACIÓN DE ELLOS

//     VAMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto
//     QUE YA TENEMOS CREADO

producto.categoria="electronicos"

console.log("añadir categoria a producto:",producto);

producto.precio = 25;

// PARA ELIMINAR PROPIEDADES USAMOS delete
// VAMOS A BORRAR LA PROPIEDAD DISPONIBLE

delete producto.disponible;

console.log("borrado de disp producto:",producto);

// CREAR VARIABLES A PARTIR DE PROPIEDADES

let precioProducto = producto.precio;
console.log("variable a partir de propiedad:",precioProducto);

let categoriaProducto = producto.categoria;

console.log("crear variable a partir de propiedad:",categoriaProducto);

// DESTRUCTURING DE OBJETOS
// SACAR DE UNA ESTRUCTURA

// CREAMOS LA VARIABLE Y EXTRAE EL VALOR
// TODO EN UN SOLO PASO

//     CREA LA VARIABLE
//     EXTRAE EL VALOR
//     LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD

let {precio}=producto;

console.log("destructuring al precio:",precio)

// EJERCICIO


let playa = {
    nombrePlaya: "elFaro",
    ubicacion: "puertolacruz",
    recomendable: true,
    temperaturaAgua: 24,
}

let {nombrePlaya,ubicacion,recomendable,temperaturaAgua}=playa;

console.log(`en la playa ${nombrePlaya} que esta en ${ubicacion} el agua esta a ${temperaturaAgua} grados. Te la recomiendo: ${recomendable}`);



// CONST NO FUNCIONA CON OBJETOS, SI QUIERES CONGELADOR Y QUE NO SE PUEDA MODIFICAR SE USA FREEZE

// Object.freeze(producto);
// producto.congelado="intentamos congelarlo"; 

// console.log("intento modificar propiedad con freeze:",producto); 


// PARA SABER SI UN OBJETO ESTA CONGELADO??

console.log("esta congelado?:",Object.isFrozen(producto));

// FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
// producto.disponible = false; //NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD,
// PUES ESTÁ CONGELADO CON FREEZE

// CON EL METODO Object.freeze
//     NO PODEMOS AÑADIR PROPIEDADES
//     NO PODEMOS BORRAR PROPIEDADES
//     NO PODEMOS MODIFICAR PROPIEDADES

// CON EL MÉTODO Object.Seal
//     NO PODEMOS AÑADIR PROPIEDADES
//     NO PODEMOS BORRAR PROPIEDADES
//     SI PODEMOS MODIFICAR PROPIEDADES

// EJERCICIO

let medidas={
    peso: 60,
    alto: 155,
    ancho: 50,
    profundidad: 70,
}
 Object.seal(medidas);

 medidas.alto=125;

 console.log("muestra como se modifica usando SEAL:",medidas);
 console.log(`como se ve con SEAL: ${medidas.alto}`);

//  COMO UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

// EL FIN ES NO MODIFICAR LOS OBJETOS ORIGINALES

let nuevoProducto={...producto,...medidas};
console.log("nuevo objeto con spread operator:",nuevoProducto);
