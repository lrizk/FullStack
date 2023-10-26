//TRY CATCH
        
const numero1 = 20;
const numero3 = 40;

// console.log(numero1); // SE MUESTRA POR CONSOLA, OK
// console.log(numero2); // NO SE MUESTRA POR CONSOLA, DA FALLO
// console.log(numero3); // NO LA MUESTRA, ESTABA PARALIZADO EL CODIGO

// PARA HACER QUE INTENTE HACER LO SIGUIENTE, HACEMOS EL TRY CATCH



//PROMISES
//REFLEJA UN VALOR QUE ESTARÁ DISPONIBLE AHORA, EN UN FUTURO O NUNCA

// let autenticado=true;


// let usuarioAutenticado= new Promise((resolve, reject)=>{
//     // RESOLVE Y REJECT SE PASAN AUTOMATICAMENTE CON EL PROMISE
//     // RESOLVE FUNCION QUE SE EJECUTA CUANDO EL PROMISE SE CUMPLE
//     // REJECT NO SE CUMPLE

//     if (autenticado){
//         resolve("usuario autenticado"); // EL PROMISE SE CUMPLE
//     } else {
//         reject("no se pudo iniciar sesion"); // EL PROMISE NO SE CUMPLE
//     }
// });

// console.log(usuarioAutenticado);

// usuarioAutenticado
// .then(function(resultado){ //SE EJECUTA CUANDO EL PROMISE SE CUMPLE
//     console.log(resultado)
// })
// .catch(function(resultado){ //SE EJECUTA CUANDO EL PROMISE NO SE CUMPLE
//     console.log(resultado);
// })


//CREAMOS UN BUTON EN EL HTML CON id BOTON -VER NOTIFICACION-

let boton=document.querySelector("#boton");

// ALMACENAMOS ESE SELECTOR EN UNA VARIABLE PARA NO TENER
// QUE ESTAR CONSTANTEMENTE HACIENDO EL SELECTOR

// DOCUMENT PARA HACER REFERENCIA AL HTML
// EVENTOS EN JAVASCRIPT, CON ADDEVENTLISTENER
// AGREGA UN EVENTO A LA VARIABLE BOTON
// DOS VALORES, PRIMERO EL EVENTO
// DESPUES LO QUE QUIERO QUE HAGA AL CUMPLIRSE EL EVENTO

boton.addEventListener("click", function(){
    console.log("DISTE CLICK");

    Notification.requestPermission() //YA ES UNA PROMESA
    .then(resultado=> console.log(`el resultado es ${resultado}`));
})

if (Notification.permission == "granted"){
    new Notification("Esta es una notificacion",{
        icon: "mujer-levantando-barra.jpg",
        body: "Notificacion tu carrera digital"
    })
}


//ASYNC/AWAIT

// SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
// NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

// LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
// LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
// EL RESTO DEL SITIO WEB

// SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
// HAGO USO DE ASYNC AWAIT

//VAMOS A CREAR FUNCIONES QUE SIMULEN LA CONSULTA A LA BASE DE DATOS, PARA OBTENER
//UNA RESPUESTA

setTimeout(function(){ //UNA VEZ PASADO 3 SEGUNDOS ME EJECUTA EL CUERPO DE LA FUNCION
    console.log("set time out actuando")
},3000) //MILISEGUNDOS

setInterval(function(){ //ME EJECUTA EL CUERPO DE LA FUNCION CADA CIERTO INTERVALO
    console.log("set interval actuando")
}, 4000)

function descargarNuevosClientes(){ //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(resolve=>{
        console.log("descargando clientes... espere")

        setTimeout(()=> { //PARA SIMULAR LA DESCARGA DE LA BASE DE DATOS
            resolve ("Los clientes fueron descargados")
        },5000)
    });
}

//HEMOS CREADO UN PROMISE, COMO HACEMOS USO DEL ASYN/AWAIT?

async function app(){
    const resultadoAsync = await descargarNuevosClientes();
    console.log(resultadoAsync)
    console.log("ESTE CODIGO SI SE BLOQUEA")
    
}

//ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO
// PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO
//DENTRO DE UN TRY CATCH

app();
console.log("ESTE CODIGO NO SE BLOQUEA")

//EJERCICIO
//CREAR UNA FUNCION QUE ME DESCARGUE PEDIDOS, Y ME DE UN RESPUESTA A LOS 3 SEGUNDOS

function descargarPedidos(){
    return new Promise(()=>{
        console.log("descargando pedidos")

        setTimeout(()=>{
            console.log("Tus pedidos se descargaron")
        },3000)
    });
}

console.log(descargarPedidos);
descargarPedidos();

async function app(){
    const resultadoPedidos = await descargarPedidos();
    console.log(resultadoPedidos)
    console.log("TUS PEDIDOS ESPERAN")
}

app();
console.log("YA TIENES TUS PEDIDOS");