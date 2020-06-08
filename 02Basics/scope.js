// // var and let keyword
// let iAmGlobal = 'someValue';
// if(true){
//     //let iAmLocal = 'someMoreValue';
//     var iAmLocal = 'someMoreValue'; // if we change this to var it will run outside as well
//     iAmGlobal = 'superman';
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }
// console.log(iAmLocal);
// console.log(iAmGlobal);

// Kings problem

// let king = 'John';
if(true){
    // let king = 'Sam';
    if(true){
        let king = 'Ram';
        console.log(king);
    }
}
if(true){
    console.log("I am second part : " + king);
}