let numerolr = "900";
if (numerolr === 900) {
    console.log("tu numero es 900")
} else {
    console.log("tu numero no es 900")
}

let pinCorrecto = 1234;
let miSaldo = 300;

if (pinCorrecto === 1234) {
    console.log("tu pin es correcto 1234");
    if (miSaldo >= 540) {
        console.log("saldo suficiente");
    } else {
        console.log("saldo insuficiente");
    }
} else {
    console.log("tu pin es incorrecto");
}



function cajero(pin, cantidad) {
    if (pin === pinCorrecto) {
        console.log("Pin correcto");
        if (cantidad <= miSaldo) {
            console.log("saldo suficiente");
        } else {
            console.log("saldo insuficiente");
        }
    } else {
        console.log("Pin incorrecto");
    }
}
cajero(1234, 1200);


let rol = "admin";

if (rol === "admin") {
    console.log("eres admin");
} else if (rol === "editor") {
    console.log("eres editor")
} else if (rol === "gestor") {
    console.log("eres gestor")
} else {
    console.log("no eres nadie");
}

let estacionActual = "primavera"

if (estacionActual === "otoño") {
    console.log("Estamos en otoño");
} else if (estacionActual === "invierno") {
    console.log("Estamos en invierno");
} else if (estacionActual === "primavera") {
    console.log("Estamos en primavera");
} else if (estacionActual === "verano") {
    console.log("Estamos en verano");
} else{
    console.log("No existe")
}

// CREAR UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA DE UN EXAMEN ES SOBRESALIENTE

// SOBRESALIENTE 9-10
// NOTABLE 7-8
// SUFICIENTE 5-6
// SUSPENSO -5

// CREAMOS UNA VARIABLE QUE SE LLAME notaExamen

let notaExamen=8;

if(notaExamen>=9){
    console.log("SOBRESALIENTE");
} else if(notaExamen>=7){
    console.log("NOTABLE");
} else if(notaExamen>=5){
    console.log("SUFICIENTE");
} else if(notaExamen<5){
    console.log("SUSPENSO");
}

// OTRA FORMA DE HACERLO USANDO EL 'OR'

if(notaExamen==9||notaExamen==10){
    console.log("SOBRESALIENTE");
} else if(notaExamen==7||notaExamen==8){
    console.log("NOTABLE");
} else if(notaExamen==5||notaExamen==6){
    console.log("SUFICIENTE");
} else if(notaExamen<5){
    console.log("SUSPENSO");
}

// SWITCH ES OTRO METODO DE ESTRUCTURA DE CONTROL

// let metodoPago= prompt("Introduce tu metodo de pago","Escriba aqui");

let metodoPago="efectivo"

switch(metodoPago){
    case "tarjeta": console.log("Pago con tarjeta");
    break; //CIERRE DE UN CASO
    case "bizum": console.log("pagaste con bizum");
    break;
    case "efectivo": console.log("pagaste con efectivo");
    default: console.log("pendiente de pago");
    break;
}

let numEj=13;

//LA ECUACION QUE SE QUIERA REALIZAR VA DESPUES DEL IF DENTRO DEL ()

if(numEj*numEj<100){
    console.log("Numero menor de 100");
} else if(numEj*numEj<200){
    console.log("Numero menor de 200")
} else{
    console.log("No cumple con las anteriores")
}


//ELSE IF EN UNA FUNCION
function multiplo(x){

    if(x*x<100){
        console.log("Numero menor de 100");
    } else if(x*x<200){
        console.log("Numero menor de 200")
    } else{
        console.log("No cumple con las anteriores")
    }
}

multiplo(5);

let queNumeroEs=parseInt(prompt("Escribe aqui tu numero"));

//LA ECUACION SIEMPRE VA DONDE ESTA LA VARIABLE QUE SE EVALUA

switch(queNumeroEs+10){
    case 9: console.log("tu numero es 9");
    break;
    case 12: console.log("Tu numero es 12");
    break;
    case 15: console.log("Tu numero es 15");
    break;
    case 100: console.log("Tu numero es 100");
    break;
    default: console.log("Resto de posibilidades");
    break;
}

//SWITCH EVALUA CASOS CON VALORES CONCRETOS (CASO 1, CASO 2)
//ELSE IF PERMITE UTILIZAR RANGOS DE VALORES (MAYOR QUE, MENOR QUE)
