const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};

// console.log(deadpool.getNombre());

// function imprimeHeroe(heroe) {
//     const { nombre, apellido, poder, edad = 0 } = heroe;

//     console.log(nombre, apellido, poder, edad);
// }

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad);
}

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);

imprimeHeroe(deadpool);

const heroes = ['Juan', 'Ciro', 'Ricardo'];
const [h1, h2, h3] = heroes;
const [, , p] = heroes;

console.log(h1, h2, h3);
console.log(p);