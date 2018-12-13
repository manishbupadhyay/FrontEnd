/* const type = "Cupcake";  // never change throughput the application
let flavor = "Apple"; // can change as much as we want
let price = 5;

flavor = "Chocolate";

console.log(flavor); */

// Scope of let and const variable

/* var value = 10;
var winner = true;
if(value == 10){
    var winner = false;
}
console.log(winner); // output is False */

/* const value = 10;
let winner = true;
if(value == 10){
    let winner = false;
}
console.log(winner); // output is true */

const value = 10;
let winner = true;
if(value == 10){
    winner = false;
}
console.log(winner); // output is false