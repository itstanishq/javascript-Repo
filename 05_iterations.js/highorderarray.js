// for of loop

// Example 1 :

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);        // basically it access all the element in the array.
// }

// Example no 2

// const myName = "Tanishq Bhardwaj";
// for (const alpha of myName) {
//    console.log(`this is the alphabet of ${alpha}`);      // done with strings
// }

// Maps             -- it holds key value pairs and we can apply loops on it.

const map = new Map(); 
map.set('Pandat', 'Tani')
map.set('Jaat', 'Anki')      // it doesnt contain any duplicate value
map.set('Rajpoot', 'Aksh')
map.set('Gujjar', 'Vinir')

// console.log(map);

for (const [key , value] of map) {
   // console.log(key,"-:",value);
}

// can we use for of in a object - no it has diffrent ways





