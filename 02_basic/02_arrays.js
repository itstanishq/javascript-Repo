// some another basics of array 

const marvel_heroes = ['ironman','spiderman','thor'];
const dc_heroes = ['batman','superman','flash'];

// if i will try to push the dc hero array into marvel array the output will be .

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  // this will show that the dc hero is added as a single component in the marvel array .

const superheros = marvel_heroes.concat(dc_heroes);
// console.log(superheros); //concat returns new array 

const newSpHero = [...marvel_heroes,...dc_heroes];
// console.log(newSpHero);      // this is the spread operater methord

const anotherArray = [1,2,3,4,[5,6,7],[7,8,9,[2,4,5]]];
const anotherRealArray = anotherArray.flat(Infinity);
// console.log(anotherRealArray);   // it give us the flat array with dept

// console.log(Array.isArray('tanishq'));
// console.log(Array.from('tanishq')); // it will convert string into a array 
// console.log(Array.from({name:'tanishq'}));  // if it doesn't work it will return the empity array

let score1 = 200;
let score2 = 300;
let score3 = 400;
// console.log(Array.of(score1,score2,score3)); // it converts the multiple number value into array 

//-----------------------basic of array is finshed -----------------------//

