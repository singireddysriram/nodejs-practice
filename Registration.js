//Module

function CheckForUser(){
    console.log("Checking for user...");
    return true; 
}

function RegisterUser(){
    console.log("User registered successfully!");
}

module.exports = {
    CheckForUser: CheckForUser,
    RegisterUser: RegisterUser
}