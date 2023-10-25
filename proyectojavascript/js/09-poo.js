//LE PONEMOS EL NOMBRE DE LA CLASE SIEMPRE INICIO EN MAYUS

function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombreObjeto=nombre;
    this.precioObjeto=precio;
    this.categoria=categoria; //le puedo dar el nombre que queira se le suele dar el mismo
    this.disponibilidad=disponibilidad;
}

//CREAMOS UNA INSTANCIA
const producto2 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto3 = new ProductoClase("PC",1800);
const producto4 = new ProductoClase("Reloj",800);
console.log(producto2);
console.log(producto3);
console.log(producto4);


//EJERCICIO
// CREAR UN OBJETO CON OBJECT CONSTRUCTOR 
// LLAMADO FECHA
// CON PROPIEDADES, AÑO, MES, DÍA
// DAR 4 VALORES DISTINTOS






//PROTOTYPES
// ME PERMITE CREAR FUNCIONES QUE SOLO UTILIZAN EN UN OBJETO ESPECIFICO


ProductoClase.prototype.formatearProducto=function(){
    console.log(`EL producto ${this.nombreObjeto}tiene un precio de${this.precioObjeto}`);
}







// OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES


class ProductoClase2{
    constructor(nombre,precio){
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio
    }

    formatearProducto2(){
        return(`el producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} $`)
    }

    descuento(){
        return(`El precio final con descuento es de ${this.precioObjeto2*(1-0.2)}`);
    }
}

//INSTANCIAS

const producto8=new ProductoClase2("TV nueva",678);
console.log("producto 8 con class")
console.log(producto8);
console.log(producto8.formatearProducto2());


//EJERCICIO
//CREAR UN OBJETO CONSTRUCTOR LIBRO CON PROPIEDADES NOMBRE, PRECIO, ISBN
// HACIENDO USO DEL CONSTRCUCTOR
//Y GENERAR UNA INSTANCIA AL MENOS

class libro{
    constructor(nombre,precio,isbn){
        this.nombreLibro=nombre;
        this.precioLibro=precio;
        this.isbnObjeto=isbn;
    }
    // formatearLibro(){
    //     return(`el ${this}`)
    // }
}

//INSTANCIA
let libroObjeto= new libro("El pescador",20,1234567890);
console.log(libroObjeto);


//PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROOIEDADES DE UNA CLASE A OTRA

class Biblioteca extends libro{
    constructor(nombre,precio,isbn,categoria){
        super(nombre,precio,isbn);
        this.categoria=categoria;
    }
    formatearBiblioteca(){
        console.log(`El libro ${this.nombreLibro} pertenece a la categoria ${this.categoria}`);
    }
}

let biblioObjeto=new Biblioteca("el pescador",20,1234789,"horror");
console.log(biblioObjeto);
//EJERCICIO
//CREAR UN OBJETO CONSTRUCTOR COCHE
//CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
//UNA FUNCION/METODO QUE E DUGA EL NUMERO QUE TIENE EL COCHE

//CREAR DOS INSTANCIAS, UNA PARA TU COCHE, Y OTRA EL DE TU PADRE



class coche{
    constructor(marca,anocompra,motor,matricula){
        this.marca=marca;
        this.anocompra=anocompra;
        this.motor=motor;
        this.matricula=matricula;

    }
    CalculaAntiguedad(){
        console.log(`Este coche tiene ${2023-this.anocompra} años de antigiuedad`);
    }
}

let objetoCoche=new coche("mustang",2015,"delantero",666);
console.log(objetoCoche);
let objetoCochePadre= new coche("mercedes",2005,"trasero",34576);
console.log(objetoCochePadre);

//EJERCICIO
//CREAR OTRO CONSTRUCTOR DE OBJETOS LLAMADO ITV QUE HEREDE DE LA CLASE COCHE
//AÑOCOMPRA, MATRICULA Y AÑADA AÑOITV

//Y ME DE UN METODO CON EL TIEMPO QUE ME FALTA PARA LA PROXIMA ITV

class itv extends coche{
    constructor(anocompra,matricula,anoitv){
        super(undefined,anocompra,undefined,matricula);
        this.anoitv=anoitv;
    }
    CalcularItv(){
        return(`Te quedan ${this.anoitv-2023} años para pasar la ITV`);
    }
}

let objetoItv= new itv(2015,666,2028);
console.log(objetoItv);
console.log(objetoItv.CalcularItv());


