const basedatos = require("./basedatos");

const vehiculos = basedatos.vehiculos;
const marcas = basedatos.marcas;
const clientes = basedatos.clientes;
const ventas = basedatos.ventas;

 function mostrarVehiculos() {
    const vehiculosDetalle = vehiculos.map((vehiculo) => {
        const marca = basedatos.marcas.find(
            (marca) => marca.codigo === vehiculo.marca
        );

        return {
            ...vehiculo,
            marca: marca.nombre,
        };
    });

    return vehiculosDetalle;
}

function registrarVehiculo({ nombre, marca, precio }) {
    const vehiculo = {
        nombre,
        marca,
        precio,
        vendido: false,
        codigo: `VL-${vehiculos.length + 1}`,
    };

    vehiculos.push(vehiculo);

    return true;
}


module.exports = {
    mostrarVehiculos,
    registrarVehiculo
}

