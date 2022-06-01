let merlin = {
	job: 'wizard',
	age: '942',
	hobbies: ['disappearing', 'seeming aloof'],
	spells: ['dancing broomsticks', 'turning into animals'],
	height: '6 feet 3 inches',
	eyes: 'blue'
};

let {hobbies, height, eyes, ...modifiedMerlin} = merlin;

//tambien se puede hacer esto para eliminar atributos de un objeto
const modifiedMerlin2 = merlin;
delete modifiedMerlin2.hobbies;
delete modifiedMerlin2.height;
delete modifiedMerlin2.eyes;

console.log('Original merlin', merlin);
console.log('Modified merlin', modifiedMerlin);
console.log('Modified merlin2', modifiedMerlin2);