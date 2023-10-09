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