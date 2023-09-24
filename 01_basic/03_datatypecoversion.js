let score = "tanishq";
console.log(typeof score);

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" can easyly convert into number
// "33abc" this will give you value NaN(not a number) 
// true will be converted into 1

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true
// 0 = false
// "" = false
// "abc" = true

let sumNumber = 33;
let stringNumber = String(sumNumber);
console.log(sumNumber);
console.log(typeof sumNumber); 
