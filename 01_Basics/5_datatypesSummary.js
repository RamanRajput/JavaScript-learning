/*           Types of datatypes                */

//////// Primitive Datatype: 7 premitive datatypes //////////////
// call by value means when we copy these datatypes then we get the copy of its not original 

// String
let name = "Raman Rajput";

// Number
const score= 100;
const scoreValue= 100.4;

// Boolean
const isLoggedIn= false;

// null
const outsideTemp = null;

// undefined
let userEmail;

// symbol: symbol is used to make unique something.
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// BigInt
const bigNumber = 34534635434345135n;
console.log(typeof bigNumber);


////////// Non-Primitive (Reference) ///////////

// Array
const heros= ["shaktiman", "naagraj", "doga"];
//Objects
let myObj={
    name: "Raman",
    age: 25
}

//Functions
const myFunction = function(){
    console.log("Hello world")
}



// https://262.ecma-international.org/5.1/#sec-11.4.3

// ********************* Memory *************************
// two tyes of memories: stack and heap
// Stack (Primitive), Heap (Non-Primitive)


//Example For stack:
let myYoutubeName = "RajputVlogs";  

let newYtName = myYoutubeName;
newYtName = "rrvlogs";
console.log(myYoutubeName);
console.log(newYtName);

//Example for Heap:
let userOne={
    email: "userone@gmail.com",
    upi: "abc@ybl"
}

let userTwo = userOne;

userTwo.email= "userTwo@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
