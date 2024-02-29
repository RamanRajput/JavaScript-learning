const score= 400;
console.log(score);

const balance= new Number(100);  //try to run in colsole it shows prototypes of number.
console.log(balance);

console.log(balance.toString().length);  //convert number to string and print its lenght.
console.log(balance.toFixed(2));  // it use for digits after decimal.

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);


//*********************** Maths ***************************
console.log(Math);  //run in console
console.log(Math.abs(-4)); //it always convert into positive value

console.log(Math.round(4.3));  //it make round value
console.log(Math.ceil(4.3));  
console.log(Math.floor(4.3));  
console.log(Math.min(4, 3, 9, 8));  
console.log(Math.max(4, 3, 9, 8));  

console.log(Math.random());

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1) + min));
