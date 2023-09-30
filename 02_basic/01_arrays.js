// arrays ----- 

const Arr = [1,2,3,4,,5];
// console.log(Arr[0]);

const Arr2 = new Array(1,2,3,4,5);
// console.log(Arr2[2]);

// Array Methods

const myArr = [0,1,2,3,4,5];
// myArr.push(6);
// myArr.pop();
// console.log(myArr);
myArr.unshift(7);   // add from front
myArr.shift(7);     // delete from front
// console.log(myArr);  // it take more time to load mach.

// questioner functions

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);         // in this new arr the type will be changed to string

// slice 
console.log("A",myArr);
const n1 = myArr.slice(1,3);
// console.log(myArr);
// console.log("B",n1);             // slice my will the part of array where range is not included. no changes in orignal array

//splice
const n2 = myArr.splice(1,3);
console.log("c",n2);
console.log(myArr);         // it holds the range value also and the value of orignal array will also be changed








