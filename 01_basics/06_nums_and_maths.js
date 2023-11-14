// node 01_basics/06_nums_and_maths.js

const score = 500
// console.log(score);

const balance = new Number(500)
// console.log(balance);
// console.log(balance.toFixed(1));

const otherNumber = 123.5634
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
// console.log(hundreds.toLocaleString()); /// to add comma in numbers



// *********************Maths**********************

// console.log(Math);
// console.log(Math.abs(-4));// its converts any negative number to positive
// console.log(Math.round(3.3));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(2.9));
// console.log(Math.min(59, 48, 20, 67));
// console.log(Math.max(59, 48, 20, 67));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);

//
