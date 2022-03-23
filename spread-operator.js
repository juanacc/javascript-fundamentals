const myHouse = { size: 30, age: 40, countFloors: 2, countEnvironments: 6 };
const newHouseAge = { age: 44 };
// classic solution
let friendHouse = { size: 30, age: 25, countFloors: 2, countEnvironments: 6 };

// but using the spread operator
friendHouse = { ...myHouse, age: 25 };
console.log(friendHouse);
// keep in mind that the properties are applied in the order in which the objects are given
let newHouse = { ...friendHouse, ...newHouseAge };
console.log(newHouse);
//console.log(newHouse.age); // log 44
// on the opposite
newHouse = { ...newHouseAge, ...friendHouse };
console.log(newHouse); // log 25
