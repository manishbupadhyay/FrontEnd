// const days = ['Mon','Tue','Wed','Thu','Fri','Sat']
// //console.log(days[0]);
// // days.forEach(function(day,index){
// //     console.log(`Start with ${index+1} -- ${day}`)
// // })
// // for(let index = 0; index < days.length; index++){
// //     // const element = days[index];
// //     // console.log(element);
// //     console.log(days[index]);
// // }
// for(let index = days.length-1; index >=0; index--){
//       console.log(days[index]);
// }
const myTodos = [];
myTodos.push('Buy Bread');
myTodos.push('Record video for youTube');
myTodos.push('Go to Gym');
myTodos.forEach(function(todo,index){
      console.log(`Your task no ${index + 1} is: ${todo}`);
})