var user = {
    name: "manish",
    age: 27,
    desgination: "Developer",
    bikes: ['harley','FZ'],
    misc:{
        hobbies:['singing','playing cricket'],
        language:['Bhojpuri','Hindi','English','Marathi']
    },
    salute:function(){
        // using this keyword
        console.log('Hey there, i am ' + this.name + ' and i am ' + this.age + ' years old' );
    }
};

//console.log(user.salute());

user.salute();

/* user.name = 'Aadi';
console.log(user.name); */