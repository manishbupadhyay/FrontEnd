// Function
var number = 5;

(function showName(value){
    // var number = value + 5;
    number = value + 5;
    console.log(number);
    
}) (number);

console.log(number);

// Closures

function multiply(value) {
    var total = value;
    return function () {
        return total * 2;
    }
}
var getResult = multiply(20);
var getResult2 = multiply(30);

console.log(getResult());
console.log(getResult2());

var name = 'Manish Upadhyay';

// convert to uppercase
console.log(name.toUpperCase());
// convert to lowercase
console.log(name.toLowerCase());
// trim white spaces
console.log(name.trim());
// get the amount of characters
console.log(name.length);
// get a specific character
console.log(name[2]);
console.log(name.charAt(7));
// merge it with different string
console.log(name.concat(' , Urf Guddu Bhaiya'));
// split every word of it
console.log(name.split("/"));

// setTimeOut

setTimeout (function(){
    console.log('How are you');
},2000);

setInterval (function(){
    console.log('Hello World');
}, 2000);
