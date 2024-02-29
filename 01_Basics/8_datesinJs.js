// Dates

let myDate = new Date();


// console.log(myDate);
// console.log(myDate.getTime());  //it will give miliseconds since jan,1 1970.
// console.log(myDate.getMonth() + 1);  //in javaScript months store in array so in JS months starts from 0 to 11. That's why we add 1 in months.
// console.log(myDate.getDate());
// console.log(myDate.getDay());


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

console.log(myDate.toLocaleString('default', {
    weekday:"short",
    
}));



// let myCreatedDate= new Date(2024, 0, 19);
// let myCreatedDate= new Date(2024, 0, 19, 5, 30, 16);
let myCreatedDate= new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);  //In milisecond
console.log(myCreatedDate.getTime());      //compare myCreatedDate & myTimeStamp and use for any contest

console.log(Math.floor(Date.now() / 1000));  // to convert from milisecond to second. (Date.now/1000)


console.log(`Now the time is ${myTimeStamp}`);
