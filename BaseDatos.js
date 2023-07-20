const basedatos = {
    clientes: [
        {
            nombre: 'Juan PÃ©rez',
            documento: '77068189',
            codigo:'CL-001'
        },
        {
            nombre: 'MarÃ­a GarcÃ­a',
            documento: '67068189',
            codigo:'CL-002'
        },
        {
            nombre: 'Carlos RodrÃ­guez',
            documento: '27068189',
            codigo:'CL-003'
        }
    ],
    vehiculos: [
        {
            nombre:'Ford Mustang',
            marca: 'TYT001',
            vendido: false,
            precio: 5000,
            codigo: 'VL-001',
        }
    ],
    marcas: [
        {
            nombre: 'TOYOTA',
            codigo: 'TYT001'
        },{
            nombre: 'FORD',
            codigo: 'FRD002'
        }
    ],
    ventas: [
        {
            cliente: '',
            vehiculo: '',
            fechaCompra: new Date('12/01/03'),
            codigo: 'COMP-0001'
        }
    ]
}

module.exports = basedatos