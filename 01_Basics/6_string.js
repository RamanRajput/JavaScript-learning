const name= "Raman";
const age = 25;

// console.log(name + age + " Value");  //not preffered

// console.log(`Hello my name is ${name} and my age is ${age}.`);  //it is a good way.


const gameName = new String('bgmi');   //run in console
// console.log(gameName[0]);
// console.log(gameName.__proto__);    //run in console  prototype.method
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));


const newGame="bgmi-ind";
// finalGame= newGame.substring(0, 5);  //if we give negative value in substring so it will take as starting.
// console.log(finalGame);

// console.log(newGame.slice(-5, 5));  //in slice we can give negative value. it will count from last.

 
// let city = "   Rishikesh  ";
// console.log(city);
// console.log(city.trim());

const url = "https://hiteshchoudhary.com/20%index.html";
// console.log(url.replace('20%', '-'));
// console.log(url.includes('raman'));   // it is use to check any perticular thing is present or not

// console.log(newGame.split('i'));   //this variable is take from line 17.



function manipulateArr(arr) {
    arr.push(5);
    arr = [1];
    return arr;
}
let list = [1,2,3,4];
manipulateArr(list);
console.log(list);

list = manipulateArr(list);
console.log(list);