const { seleccionarOpcion } = require("./app");
const back = require("./backend");


function mostrarMenu() {
    console.log("== MENÚ DE TIENDA DE AUTOS ==");
    console.log("1. Ver catálogo de autos");
    console.log("2. Registrar un auto");
    
    console.log("5. Salir");
    console.log("=============================");
}


function mostrarVehiculos() {
   const vehiculos = back.mostrarVehiculos();

    const vehiculosView = vehiculos.map((vehiculo) => {

        const vehiculoView = `
        + "**********TODOS VEHICULOS DE TIENDA**********"
        + "____Vehiclo 01"
        + "nombre: ${vehiculo.nombre}"
        + "marca: ${vehiculo.marca}"
        + "precio: ${vehiculo.precio}"
        + "codigo: ${vehiculo.codigo}"
        + "vendido: ${vehiculo.vendido}"
        `
        return vehiculoView;

    });
    console.log(vehiculosView);
    mostrarMenu();
    return seleccionarOpcion();
}

function registrarVehiculo({ nombre, marca, precio }) {
    if(!nombre || !marca || !precio){
        return 'Todos los datos son obligatorios'
    }
    const vehiculo = back.registrarVehiculo({ nombre, marca, precio });

    if(vehiculo){
        return 'Vehiculo registrado con exito'
    }else{
        return 'Error al registrar vehiculo'
    }
    
}





module.exports = {
    mostrarVehiculos,
    registrarVehiculo,
    mostrarMenu
}
