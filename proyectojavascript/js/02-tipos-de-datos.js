const producto1 = "juego de mesa EL PUEBLO duerme"; 
const producto2 = String("dooble");
const producto3 = new String("UNO");
// TRES FORMAS DE USAR EL VALOR TIPO STRING

console.log("juego de mesa",producto1);
console.log("juego Dooble",producto2);
console.log("juego UNO",producto3);

console.log("juego de mesa",typeof producto1);
console.log("juego Dooble",typeof producto2);
console.log("juego UNO",typeof producto3);


let numero100 = 100;
let numero200 = "200";
let numero300 = true;

console.log("variable numero100",typeof numero100);
console.log("variable numero200",typeof numero200);
console.log("variable numero300",typeof numero300); 


console.log("METODO LENGTH:",numero200.length);

console.log("metodo indexof:",producto1.indexOf("duerme"));

let ejstring1 = "casa";
let ejstring2 = String("cuento de hadas");
let ejstring3 = "garaje"

console.log("metodo length:",ejstring1.length);
console.log("metodo indexof:",ejstring2.indexOf("hadas"));
console.log("metodo includes:",ejstring3.includes("hadas"));


let numero1 = 100;
let numero2 = 200.25;
let numero3 = "300";

console.log("NUMERO 1:", numero1);
console.log("NUMERO 2:", numero2);

console.log("TYPEOF NUMERO 1:", typeof numero1);
console.log("TYPEOF NUMERO 2:", typeof numero2);
console.log("TYPEOF NUMERO 3:", typeof numero3);


console.log("numero1 * numero2:",numero1*numero2);
console.log("numero2 - numero1:",numero2-numero1);
console.log("numero1 + numero2:",numero1+numero2);
console.log("numero2 / numero1:",numero2/numero1);
console.log("numero1 % numero2:",numero1%numero2);


let resultado = Math.random();

console.log("resultado random:",resultado);

resultado = Math.round(Math.random()*30);
console.log("numero aleatorio entero:",resultado);

let diametro = 5;

let area;

area = Math.PI*Math.pow(diametro/2,2);

console.log("resultado area:",area);

let dado = Math.round(1+Math.random()*5);
console.log("resultado dado:",dado);

let resultadoOrden = 20 + 30 * 2;
console.log("orden de operaciones:",resultadoOrden);

let resultadoOrden2 = (20+30) * 2;
console.log("orden operaciones 2:",resultadoOrden2);


let prenda1=120;
let prenda2=85;
let prenda3=24;


let importe = prenda1+prenda2+prenda3;

console.log("importe sin ahorro:",importe);

let descuento = 40;

let ahorro=importe*descuento/100;

console.log("ahorro:",ahorro);

let total=importe-ahorro;

console.log("total a pagar:",total);

let meGusta =0;

meGusta+=15;

meGusta-=6;
console.log("me gusta:",meGusta);

let nombre = "lorena";
let email = "lorena@gmail.com";

console.log("nombre: " + nombre + " email: " + email);










