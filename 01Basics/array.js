var arr = [1,2,3,4,5];

arr.push(6);
arr.pop(5);
arr.shift(1);
arr.unshift(7);
console.log(arr);

var arr = ['Ayan', 'Manish', 'Roshani'];

console.log(arr.indexOf('Ayan'));
console.log(arr.splice(0,1));
console.log(arr.slice(2));

var arr1 = ['Manish','Roshani','Ayan'];
var arr2 = ['Guddu','Rosh','Aadi'];

var finalArray = arr1.concat(arr2);
var finalArray = arr1.join(" "); // split the araay with spaces
console.log(finalArray);

var arr = [1,3,5,7,9,10];
var filtered = arr.filter(function(item){
    return item > 5;
});

console.log(filtered);
console.log(arr);

var arr = [1,5,10,20,30];

var filtered = arr.map(function(item){
    return item + 5;
});

console.log(filtered);
console.log(arr);

var arr = ['Ayan', 'Manish', 'Roshani'];

arr.forEach(function(item){
    console.log("My name is " + item);
});
