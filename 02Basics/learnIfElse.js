// LCO - LearnCodeOnline

var whoIsHere = 'abc';
if(whoIsHere === 'user'){
    console.log('Greeting message for user');
    console.log('Allow access to view all courses');
}else if(whoIsHere === 'teacher'){
    console.log('Greeting message for TEACHER');
    console.log('Allow access to his course');
}else{
    console.log('MESSAGE: Please verify your email');
    console.log('Send user an email for verification');
}