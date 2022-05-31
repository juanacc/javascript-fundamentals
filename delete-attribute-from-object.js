let merlin = {
	job: 'wizard',
	age: '942',
	hobbies: ['disappearing', 'seeming aloof'],
	spells: ['dancing broomsticks', 'turning into animals'],
	height: '6 feet 3 inches',
	eyes: 'blue'
};

let {hobbies, height, eyes, ...modifiedMerlin} = merlin;

console.log('Original merlin', merlin);
console.log('Modified merlin', modifiedMerlin);