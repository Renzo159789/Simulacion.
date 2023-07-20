console.log("Hola");
const readline = require("readline");
const { mostrarVehiculos, registrarVehiculo, mostrarMenu } = require("./frontend");


// Crea una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function mostrarMenu2() {
    console.log("== MENÚ DE TIENDA DE AUTOS ==");
    console.log("1. Ver catálogo de autos");
    console.log("2. Registrar un auto");
    
    console.log("5. Salir");
    console.log("=============================");
}


function seleccionarOpcion() {
    rl.question("Ingrese una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                mostrarVehiculos();
                break;
            case "2":
                registrarVehiculo();
                break;
              
            case "5":
                console.log("Gracias por visitar la tienda. ¡Hasta luego!");
                rl.close();
                break;
            default:
                console.log(
                    "Opción inválida. Por favor, seleccione una opción válida."
                );
                mostrarMenu();
                seleccionarOpcion();
                break;
        }
    });
}

mostrarMenu2();
seleccionarOpcion();


module.exports = {
    seleccionarOpcion,
}
