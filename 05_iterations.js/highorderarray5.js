// map -- it works same as filter but it automatically returns the value .

// for example

const nums = [1,2,3,4,5,6,7,8,9,10];
// we have to add 10 in all the elements of array.

// const newNums = nums.map( (num)=> {
//     return num+10;
// })

// console.log(newNums);

// CHAINNING

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers
                   .map( (num) => num*5)
                   .map((num)=> num+2)
                   .filter((num)=>{return num>=30})
                   

console.log(newNumbers);

