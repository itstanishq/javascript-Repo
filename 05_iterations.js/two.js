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