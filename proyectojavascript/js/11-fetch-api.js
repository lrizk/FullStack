function obtenerEmpleados(){
    fetch ("empleados.json") //fetch (url con la api)
    .then (resultado =>{
        return resultado.json() //VOY A TENER UNA RESPUESTA TIPO JSON
    })
    .then(datos =>{
        const{empleados}=datos;
        console.log(empleados);


        empleados.forEach(empleado =>{
            console.log(empleado)
            console.log(empleado.id)
            console.log(empleado.nombre)
            console.log(empleado.puesto)

        });
    })
}
obtenerEmpleados();


//STATUS OK, ES QUE HA HECHO LA CONSULTA FETCH CORRECTAMENTE. STATUS 200

//OTRA FORMA DE HACERLO CON ASYNC/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    console.log(datos)

}

obtenerEmpleados2();

//AHORA VEREMOS COMO ACTUAL JAVASCRIPT EN EL DOM, COMO SELECCIONAR ELEMENTOS DEL HTML, COMO CREAR EVENTOS ETC

//ENTREGAR COMO PRÁCTICA MODULO 3. UNA CARPETA CON LOS ARCHIVOS JS QUE HEMOS HECHO HASTA HOY