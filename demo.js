const registerUser=require('./Registration');

function sayHello()
{
    console.log("Hello, World!");
}

sayHello();

const isExisting = registerUser.CheckForUser();
if(isExisting){
    console.log("User is already existing.");
}
else{
    registerUser.RegisterUser();
}

//Modules
      //Registration - Checking, Register
      //Login - Password validate, Checking if he/she is registered 
      //Instafeed - fetch data from database
