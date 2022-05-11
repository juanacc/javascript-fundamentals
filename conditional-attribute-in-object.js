//https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
const a = 11;

const obj = {
  ...(a < 10 && { someprop: 42 }),
  ...(a > 10 && { nonprop: 'foo' }),
  ...({} && { tricky: 'hello' })
};

console.log(obj);

//Otro ejemplo:
const cuit = '23-12903459-8';
const bodie = {
  type:'tipo1',
  registered : 'true'
}

const {type = 'tipo0', registered} = bodie;

console.log('Registered', registered);

const query = {
	cuit,
  type,
  ...(registered && {isRegistered:registered})
};

console.log(query)

