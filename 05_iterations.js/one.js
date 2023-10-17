// for loop

for (let i = 0; i <=10; i++) {
    const element = i;
    if (i==5) {
       // console.log("5 is the best number");
    }
   // console.log(element);
    
}

for(let i = 1 ; i<=10; i++){
    // console.log(`Outer Loop : ${i}`);
    for(j=1;j<=10;j++){
   //  console.log(`Inner Loop : ${j} and Outer Loop : ${i}`);
    //  console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ['flash','batman','superman']
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {    
    const element = myArray[index];
    // console.log(element);
}

for(let i =1 ; i<=20;i++){
    if (i == 5) {
        //console.log(`fav value 5 is detected `);
        break
    }

   // console.log(`the current value is ${i}`);
}

for(let i =1 ; i<=20;i++){
    if (i == 5) {
        console.log(`fav value 5 is detected `);      // skips for one time
        continue
    }

    console.log(`the current value is ${i}`);
}


// basic for loop completed 