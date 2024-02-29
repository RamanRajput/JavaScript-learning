const accountId = 12345;
let accountEmail = "raman2702@gmail.com";
var accountPassword= "35455";
accountCity= "Rishikesh";
let accountState;

// accountId = 3353;   //can't change value bcz accountId declared as constant.
accountEmail="rr27@gmail.com";
accountPassword="4846";
accountCity="Dehradun";

/*
Note:
prefer not to use var 
bcz of issue in block scope and function scope
var work on globle scope
*/
console.log(accountId, accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity]);
