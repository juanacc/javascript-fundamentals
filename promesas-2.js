// ES5: Part 1

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black'
    };
    resolve(phone); // fulfilled
  } else {
    const reason = new Error('mom is not happy');
    reject(reason); // reject
  }
});

// 2nd promise
// const showOff = phone => {
//   return new Promise((resolve, reject) => {
//     const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//     resolve(message);
//   });
// };

//La funcion showOff tambien se puede escribir en forma abreviada de la siguiente manera
const showOff = phone => {
  const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
  return Promise.resolve(message);
};

const askMom = () => {
  willIGetNewPhone
    .then(fulfilled => {
      // yay, you got a new phone
      console.log(fulfilled);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(error => {
      // oops, mom didn't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

// call our promise
const askMom2 = () => {
  willIGetNewPhone
    .then(showOff) // chain it here
    .then(fulfilled => {
      console.log(fulfilled);
      // output: 'Hey friend, I have a new black Samsung phone.'
    })
    .catch(error => {
      // oops, mom don't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

//askMom();
askMom2();
