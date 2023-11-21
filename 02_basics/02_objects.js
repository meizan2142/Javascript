// node 02_basics/02_objects.js

const mysym = Symbol("key1")

const jsUser = {
    name: "Saif",
    "full name": "Saif Sultan Meizan",
    [mysym]: "key1",
    age: 21,
    location: "Chattogram",
    email: "saifsahai2002@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser["full name"] = "Meizan Aksha"
Object. freeze(jsUser)
// console.log(jsUser);


jsUser.greeting = function(){
    // console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    // console.log(`Hello Js user, ${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greetingTwo);


const tinderUser = {}

tinderUser.id = "124abd"
tinderUser.name = "Sabrina"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "aksha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sabrina",
            lastname: "Aksha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "Saif", 2: "Sabrina"}
const obj2 = {3: "Akhter", 4: "Sultan"}
const obj3 = {5: "Meizan", 6: "Aksha"}

const obj4 = {...obj1, ...obj2, ...obj3}  // to combined a lots of object you can use this syntax.
// console.log(obj4);


