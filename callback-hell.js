const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Jorge'
    },
    {
        id: 3,
        nombre: 'Javier'
    },
    {
        id: 4,
        nombre: 'Jacinto'
    },
];


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }

};

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callback(null, salario)
    } else {
        callback(`No existe salario para el id ${id}`);
    }
}

//console.log(getEmpleado(3));

const id = 4;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
})

getSalario(id, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    // console.log('El salario del empleado es: ', salario.salario);
    console.log(salario);
});