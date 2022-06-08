let merlin = {
	job: 'wizard',
	age: '942',
	hobbies: ['disappearing', 'seeming aloof'],
	spells: ['dancing broomsticks', 'turning into animals'],
	height: '6 feet 3 inches',
	eyes: 'blue'
};

let {hobbies, height, eyes, ...modifiedMerlin} = merlin;
// Hola Juan.

// Si utilizamos la desestructuración puedes crear un objeto con los elementos restantes al utilizar el operador spread.

// En este caso:

// const {google, ...newObject} = req.body:
// utilizamos el operador spread para crear el objeto "newObject" con todos los elementos excepto "google".

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// De igual manera, puedes crear un objeto sin la propiedad que deseas omitir.

// Espero sea de ayuda. Saludos.

//tambien se puede hacer esto para eliminar atributos de un objeto
const modifiedMerlin2 = merlin;
delete modifiedMerlin2.hobbies;
delete modifiedMerlin2.height;
delete modifiedMerlin2.eyes;

console.log('Original merlin', merlin);
console.log('Modified merlin', modifiedMerlin);
console.log('Modified merlin2', modifiedMerlin2);