// node 02_basics/question.js


// Practice question 1 of lecture 1: Create a const called "product" to store information shown in the picture.

const product = {
    name: "Parker Jotter Standard CT Ball pen(Black)",
    rating: 4,
    offer: 5,
    price: 270
}
// console.log(product);



// Practice question 2 of lecture 1: Create a const called "profile" to store information shown in the picture.

const profile = {
    name: "@saifsultanmeizan",
    isFollow: true,
    followers: 569,
    posts: 195,
    following: 4,
    bio: "Apna College | Ex-Microsoft, DRDO, to educate someone is the highest privilege"
}
// console.log(profile);




//Practice question-2 of lecture 2: Write a code which can give grades to students according to their scores:
// 80-100, A+
// 70-79, A
// 60-69, B
// 50-59, C
// 40-49, D
// 0-32, F
let number = 70;
let grade;
if (number >= 80 && number <= 100 ) {
    grade = "A+";
} else if (number >= 70 && number <= 79) {
    grade = "A";
} else if (number >= 60 && number <= 69) {
    grade = "B";
} else if (number >= 50 && number <= 59) {
    grade = "C";
} else if (number >= 33 && number <= 49) {
    grade = "D";
} else if (number >= 0 && number <=32) {
    grade = "F";
}
// console.log("According to your scores, your grade was :", grade);


//Practice question 1 of lecture 2: Get user input a number using pompt("Enter a number"). Chech if the number is a multiple of 5 or not.
// let number = 40;

// if (number % 5 === 0) {
//     console.log(number, 'is a multiple of 5');
// } else {
//     console.log(number, 'is not a multiple of 5');
// }