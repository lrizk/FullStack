//EVENTOS EN JAVASCRIPT

//EVENTO LOAD

console.log(1);

window.addEventListener("load",function(){
    console.log("se ha cargafado html, css, js");

})

//EVENTO DOMCONTENTLOAD

document.addEventListener("DOMContentLoaded",function(){
    //ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
    console.log("Se ha cargado el HTML");
})

console.log(4);

//EVENTO DE SCROLL
window.addEventListener("scroll",function(){
    console.log("Scrolling...")
})

//EVENTO DE CLICK
const botonNotificacion = document.querySelector("#boton"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click",function(evento){ 
    console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
    //SUELE USAR EN FORMULARIOS

    console.log("Mostrando Notificación...");
})

//EVENTOS CON TECLADO
//EVENTOS EN LOS INPUTS Y TEXTAREA

const nombre = document.querySelector("nombre");

//EVENTO CHANGE

nombre.addEventListener("change", function(){ //ESTE SE EJECUTA CUANDO SALIMOS
    console.log("Se ha compleado el nombre");
})

//EVENTO INPUT

nombre.addEventListener("input", function(evento){ //ESTE EVENTO ES A TIEMPO REAL
    console.log("escribiendo nombre con input...");
    console.log(evento)
    console.log(evento.target.value); //ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
    // EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE
})

//EJERCICIO. CREAR UN FORMULARIO DE CONTACTO EN HTML CON
//NOMBRE
//CORREO
//MENSAJE
//BOTON ENVIAR



    <form>

        <fieldset>

            <legend> Contáctanos rellenando todos los campos </legend> 

            <div> 
                <div>
                    <label> Nombre </label>    
                    <input id="Nombre" type="Text" placeholder="Tu Nombre"> 
                </div>
                <div>
                    <label> Correo </label>
                    <input type="email" placeholder="Tu Email">
                </div>
                <div>
                    <label> Mensaje </label>
                    <textarea></textarea>
                </div>
            </div>
            <div>
                <input class="botonFormulario" type="submit" value="Enviar">
            </div>
        </fieldset>

    </form>


