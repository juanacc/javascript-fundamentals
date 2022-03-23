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

const getInfoUsuario = async (id) => {//al poner el async lo que estoy haciendo es transformar la funcion para que retorne una promesa
    try {
        //return 'Hola mundo';
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        //console.log(error);
        //return error;//SI DEJO EL RETURN, PERO HAY ALGUN ERROR, igualmente se imprimira el mensaje 'TODO BIEN!!' y luego se mostrara el error
        throw error; //para que no pase lo mencionado en la linea de arriba. Con el throw estamos llamando al reject de la funcion asincrona
    }
}

const id = 4;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN!!');
        console.log(msg);
    })
    .catch(err => {
        console.log('TODO MAL!!');
        console.log(err);
    })

