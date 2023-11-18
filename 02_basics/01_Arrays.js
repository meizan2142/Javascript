// node 02_basics/01_Arrays.js

//Arrays

const fruits = ["Banana", "Apple", "Pineapple"]
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits.join("*"));
// console.log(fruits.pop());
// console.log(fruits.push("Saif"));

const marvel_heros = ["IronMan", "Spiderman", "Thor", "CaptainAmerica"]
const dc_heros = ["Superman", "Flash", "Batman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);  // spread=concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.from("Saif Sultan Meizan")); // convert from anywhere to Array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); another way to covert from anywhere to Array 