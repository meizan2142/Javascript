const name = "Saif"
const repoCount = "1"

// console.log(`Hello my name is ${name} and my repository count is ${repoCount}`)

// node 01_basics/05_Strings.js

// another way to define Strings
const gameName =  String('SaifSultanMeizan')

// console.log(gameName[7]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('e'));

const NewString = gameName.substring(0, 2) // we can't use any Negative value here.
// console.log(NewString);
// console.log(typeof NewString);

const anotherString = gameName.slice(-16, 2)
// console.log(anotherString);

const newStringOne = "     Saif     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://saif.com/saif%30meizan"
console.log(url.replace('%30', '-'))
