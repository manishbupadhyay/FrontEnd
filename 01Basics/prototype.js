// var user = {
//     name:'manish',
//     age:27
// }

// Object.prototype.scream = function(){
//     console.log('Hello');
// }

// user.scream();

function User(){

}

var user = new User();
user.name = 'manish';

User.prototype.scream = function(){
    console.log('hello');
};

user.scream();