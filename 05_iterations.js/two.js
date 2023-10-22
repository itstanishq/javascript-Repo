// while loop
// let i  = 0;
// while (i<=10) {
//     //console.log(`the value is : ${i}`);
//     i+=2
// }


// let myArray = ['ironman','superman','khali'];
// let arr = 0
// while(arr<=myArray.length){
//    console.log(`the value is : ${myArray[arr]}`);
//     arr++
// }


let score = 11;
do{
  console.log(`the value is : ${score}`);
  score++
}while(score<=10)

// this is do while loop just for commit

// loops done tommorow dom 

//TODAY I LEARNRD ABOUT REACT MY FIRST CLASS

let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

for (initialExpression; condition; updateExpression) {
  // for loop body: statement
}

for (let i = 1; i <= 10; i++) {    
  if (i == 5) {
      break;
  }
  console.log(i);
}


let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;  // This is same as: sum = sum + i
}

console.log('The sum of 1 to 10 is: ', sum); // "The sum of 1 to 10 is:  55"

var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var evenNumbers = [];
var oddNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("The even numbers are: " + evenNumbers); // "The even numbers are: 4,44,64,24,32,74,22"
console.log("The odd numbers are: " + oddNumbers); // "The odd numbers are: 1,55,55,19,17,23"