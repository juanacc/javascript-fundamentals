//https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
const a = 11;

const obj = {
  ...(a < 10 && { someprop: 42 }),
  ...(a > 10 && { nonprop: 'foo' }),
  ...({} && { tricky: 'hello' })
};

console.log(obj);
