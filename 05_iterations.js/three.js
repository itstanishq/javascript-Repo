// for of.  array spacific loop
let arr = [1,2,3,4,5];
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
 // console.log(`Each char is ${greet}`);
}

//maps
const map = new Map;
map.set("IN" , "INDIA");
map.set("PAK" , "PAKISTAN");
map.set("SR" , "SRI LANKA");
map.set("FR" , "FRANCE");
map.set("ENG" , "ENGLAND");

console.log(map);

const sap = new Map ;
map.set("1","ANIMATION")
map.set("2","DESIGN")
map.set("SR" , "SRI LANKA");
map.set("FR" , "FRANCE");
map.set("ENG" , "ENGLAND");

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
} 



