const producto1 = "juego de mesa EL PUEBLO duerme"; 
const producto2 = String("dooble");
const producto3 = new String("UNO");
// TRES FORMAS DE USAR EL VALOR TIPO STRING

console.log("juego de mesa",producto1);
console.log("producto2 con string",producto2);
console.log("producto3 con new string",producto3);


//TYPE OF PARA VER EL TIPO DE DATO QUE TIENE UNA VARIABLE (STRING, BOOLEANO, NUM)
console.log("juego de mesa",typeof producto1);
console.log("juego Dooble",typeof producto2);
console.log("juego UNO",typeof producto3);


let numero100 = 100;
let numero200 = "200";
let numero300 = true;

console.log("variable numero100",typeof numero100);
console.log("variable numero200",typeof numero200);
console.log("variable numero300",typeof numero300); 

//METODOS PARA LOS STRING, SON FUNCIONES QUE PUEDES UTILIZAR EN FUNCION DEL TIPO DE DATO

console.log("METODO LENGTH:",numero200.length);
//ME DICE LA LONGITUD DE LA VARIABLE

console.log("metodo indexof:",producto1.indexOf("duerme"));
// INDEXOF PARA BUSCAR SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION
// SI LO ENCUENTRA ES 0 O POSITIVO, SI NO LO ENCUENTRA NEGATIVO -1

//INCLUDES RETORNA TRUE O FALSE
console.log("metodo includes",producto1.includes("duerme"));

let ejstring1 = "casa";
let ejstring2 = String("cuento de hadas");
let ejstring3 = "garaje"

console.log("metodo length:",ejstring1.length);
console.log("metodo indexof:",ejstring2.indexOf("hadas"));
console.log("metodo includes:",ejstring3.includes("hadas"));
//PARA EL INDEXOF Y INCLUDES SE LLAMA A LA VARIABLE SEGUIDO DE '.'
//LUEGO EL METODO Y LUEGO LA PALABRA A BUSCAR DENTRO DE '.includes/.indexOf("HOLA")' <--- asi

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "300";

console.log("NUMERO 1:", numero1);
console.log("NUMERO 2:", numero2);

console.log("TYPEOF NUMERO 1:", typeof numero1);
console.log("TYPEOF NUMERO 2:", typeof numero2);
console.log("TYPEOF NUMERO 3:", typeof numero3);
console.log("numero1 y typeOf numero3",numero3, typeof numero3,numero3.length);

//operaciones MATEMATICAS
console.log("numero1 * numero2:",numero1*numero2);
console.log("numero2 - numero1:",numero2-numero1);
console.log("numero1 + numero2:",numero1+numero2);
console.log("numero2 / numero1:",numero2/numero1);
console.log("numero1 % numero2:",numero1%numero2);

// SUMA +
// RESTA -
// MULTIPLICACION *
// DIVISION /
// MODULO % ME DA EL VALOR DEL RESIDUO DE LA DIVISION
// 7%6 =1
// 7%3 =1
// 8%6 =2

// Math.random(); ME MUESTRA UN RESULTADO ALEATORIO ENTRE 0-1

// Math.PI; PARA MOSTRAR EL NUMERO PI

// Math.round(2.5); PARA REDONDEAR

// Math.ceil(2.1); REDONDEA HACIA ARRIBA

// Math.floor(2.9); REDONDEA HACIA ABAJO

// Math.sqrt(144); RAIZ CUADRADA

// Math.pow(x,2); ELEVA AL CUADRADO X

// Math.abs(-200); MUESTRA EL VALOR ABSOLUTO

// Math.min(2,3,1,0); ME DA EL VALOR MENOR

// Math.max(2,3,1,0); ME DA EL VALOR MAYOR

// COMBINACIONES DE LAS ANTERIORES

let resultado = Math.random();

console.log("resultado random:",resultado);

//mostrar resultado aleatorio entre 0 y 30

resultado = Math.round(Math.random()*30);
console.log("numero aleatorio entero:",resultado);

// CALCULAR EL AREA EN FUNCION DEL DIAMETRO

// let diametro = 5;

// let area;

// area = Math.PI*Math.pow(diametro/2,2);

// console.log("resultado area:",area);

let diametro = 20;
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio, 2);
console.log("Este es el area a partir del diametro", area);
let areaRedondeo = Math.round(area); 
console.log("Este es el numero redondeado con Mathround", areaRedondeo);


//CREAR UN DADO

let dado = Math.round(1+Math.random()*5);
//el +1 es porque el random te da numeros de 0-1 entonces para que no de 0 se le suma 1 siempre
console.log("resultado dado:",dado);

let resultadoEj2=2+Math.random()*2;
console.log("resultado ejemplo2",resultadoEj2)

let resultadoOrden = 20 + 30 * 2;
console.log("orden de operaciones:",resultadoOrden);

let resultadoOrden2 = (20+30) * 2;
console.log("orden operaciones 2:",resultadoOrden2);

//CARRITO DE COMPRA CON PRODUCTOS Y MOSTRAR EL TOTAL A PAGAR Y EL AHORRO

let prenda1=120;
let prenda2=85;
let prenda3=24;

//CALCULAMOS EL IMPORTE SIN DESCUENTO
let importe = prenda1+prenda2+prenda3;

console.log("importe sin ahorro:",importe);

//CALCULAMOS AHORRO
let descuento = 40;

let ahorro=importe*descuento/100;

console.log("ahorro:",ahorro);

//IMPORTE TOTAL CON DECUENTO
let total=importe-ahorro;

console.log("total a pagar:",total);

//IMPLEMENTOS/DECREMENTOS

let meGusta =0;

meGusta+=15;
//meGusta= meGusta+150001

meGusta-=6;
//meGusta= meGusta-6
console.log("me gusta:",meGusta); //SI QUEIRO INCREMENTAR DE 1 A 1 PONOG '++' ANTES DE LLAMAR A LA VARIBLE EN EL CONSOLE

//meGusta-- decrementa en 1 a 1
//meGusta++ incrementa de 1 a 1
//AMBOS SE APLICAN A LA VARIABLE

let nombre = "lorena";
let email = "lorena@gmail.com";

console.log("nombre: " + nombre + " email: " + email);

//TEMPLATE STRING O STRING LITERALS
//HACE REFERENCIA A MEZCLAR TEXTO CON VARIABLES O FUNCIONES
//LAS VARIABLES VAN ENTRE ${} PUEDE IR UNA FUNCIÓN TAMBIEN

console.log(`nombre: ${nombre} email: ${email}`)


let boolean1= true;
let boolean2= false;
let boolean3= "true";

console.log(`tipo de dato boolean1 ${typeof boolean1}`);
console.log(`tipo de dato boolean2 ${typeof boolean2}`);
console.log(`tipo de dato boolean3 ${typeof boolean3}`);

// USO REAL: AUTENTICACION DE UN USUARIO, DARLE ACCESO A CIERTAS PARTES DE LA WEB
// SI AUTENTICACION ES TRUE, PERMITIR ACCESO, SI NO, DENEGAR