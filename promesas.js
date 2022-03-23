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

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado con id ${id} no existe`);
        }
    })

    return promesa;

};

//Hace lo mismo que la funcion getEmpleado pero es mas optimo
const getEmpleadoOptimo = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
    })

};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario con id: ${id}`);
    })
}

const id = 4;

// getEmpleadoOptimo(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log('El empleado: ', empleado, ' tiene un salario de: ', salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

let nombre;

getEmpleadoOptimo(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);//retorna una promesa!!!
    })
    .then(salario => console.log('El empleado: ', nombre, ' tiene un salario de: ', salario))
    .catch(err => console.log(err));