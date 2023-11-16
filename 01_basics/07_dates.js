// node 01_basics/07_dates.js

// Dates

let myDate = new Date()
// console.log(typeof myDate); typeof is "object"
// console.log(myDate.toDateString()); Thu Nov 16 2023
// console.log(myDate.toISOString()); // its not readable = "2023-11-16T01:28:01.369Z"
// console.log(myDate.toJSON()); 2023-11-16T01:30:56.702Z
// console.log(myDate.toLocaleDateString()); 11/16/2023
// console.log(myDate.toLocaleString()); 11/16/2023, 1:32:46 AM
// console.log(myDate.toLocaleString());  11/16/2023, 1:35:03 AM

console.log(myDate.getDay());